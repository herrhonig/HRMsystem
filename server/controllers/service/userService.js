const uuid = require('uuid');
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const mailService = require('./mailService');
const tokenService = require('./tokenService');
const UserDto = require('../dtos/userDto');
const ApiError = require('../../exceptions/api-error');

class UserService {
  async signUp(
    first_name,
    last_name,
    middle_name,
    email,
    password,
    phone,
    position,
    company,
  ) {
    console.log(
      'service log======>',
      first_name,
      last_name,
      middle_name,
      email,
      password,
      phone,
      position,
      company,
    );
    // проверяем, сущ ли юзер с таким имейлом в системе:
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      throw ApiError.BadRequest(`Пользователь с эл. почтой: ${email} уже существует`);
    }

    const hashPassword = await bcrypt.hash(password, Number(process.env.SALT));
    // activaton link:
    const activationLink = uuid.v4();

    const newUser = await User.create({
      first_name,
      last_name,
      middle_name,
      email,
      password: hashPassword,
      isActivated: false,
      activationLink,
      phone,
      position,
      company,
      access: false,
    });

    // sending link to user email:
    await mailService.sendActivationMail(email, `${process.env.API_URL}/api/users/activate/${activationLink}`);

    const userDto = new UserDto(newUser.dataValues); // id, email, isActivated

    // формируем два токена:
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async login(email, password) {
    const user = await User.findOne({ where: { email } });
    console.log('==== user ===', user);
    if (!user) {
      throw ApiError.BadRequest(`Пользователь с эл. почтой: ${email} не найден`);
    }
    // compare passwords:
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw ApiError.BadRequest('Неверный пароль');
    }
    const userDto = new UserDto(user.dataValues);
    console.log('=== user DTO ===', userDto);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async activate(activationLink) {
    // ищем юзера:
    const linkedUser = await User.findOne({ where: { activationLink } });
    console.log('===linked user ==>', linkedUser);
    if (!linkedUser) {
      throw ApiError.BadRequest('Некорректная ссылка активации.');
    }
    // меняем поле:
    linkedUser.isActivated = true;
    await linkedUser.save();
    console.log('==== changed field =>', linkedUser);
  }

  async refresh(refreshToken) {
    console.log('===== REFRESH ===');
    // если вместо токена null:
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    console.log('=== user data===', userData);
    const tokenFromDB = await tokenService.findToken(refreshToken);

    if (!userData || !tokenFromDB) {
      throw ApiError.UnauthorizedError();
    }
    const user = await User.findOne({ where: { id: userData.id }, raw: true });
    console.log('IN REFRESH user------------------------------', user);
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async getAllUsers() {
    const users = await User.findAll();
    return users;
  }
}

module.exports = new UserService();

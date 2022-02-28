const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const { User } = require('../db/models');
const ApiError = require('../exceptions/api-error');
const userService = require('./service/userService');

class UserController {
  async signUp(req, res, next) {
    const {
      first_name,
      last_name,
      middle_name,
      email,
      password,
      isActivated,
      activationLink,
      phone,
      position,
      company,
      access,
    } = req.body;
    console.log('req body=======>', req.body);
    try {
      // обработка неверных данных:
      // const errors = validationResult(req); // body внутри
      // if (!errors.isEmpty()) {
      //   return next(ApiError.BadRequest('Validation error', errors.array()));
      const userData = await userService.signUp(
        first_name,
        last_name,
        middle_name,
        email,
        password,
        phone,
        position,
        company,
        access,
      );
      // передаем входные данные в user service:
      // кладем рефреш токен в куки:
      // res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
      console.log(userData);
      return res.json(req.body);
    } catch (err) {
      next(err);
    }
  }

  async signIn(req, res, next) {
    // const { email, password } = req.body;

    // const currentUser = await Users.findOne({ where: { email } });
    // // сравниваем пароль введенный для логина с тем, что в базе:
    // const comparePassword = await bcrypt.compare(password, currentUser.password);
    // if (!comparePassword || !currentUser) {
    //   return next(ApiError.internalError('Wrong password or email!'));
    // }
    // // генерируем токен:
    // const token = generateJwt(currentUser.id, currentUser.email, currentUser.role);
    // // заносим юзера в сессию:
    // req.session.user = { id: currentUser.id, email: currentUser.email, role: currentUser.role };
    // return res.json({
    //   user: { id: currentUser.id, email: currentUser.email, role: currentUser.role },
    //   token,
    // });
    try {
      const { email, password } = req.body;

      const userData = await userService.login(email, password);

      // кладем рефреш токен в куки:
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
      return res.json(userData);
    } catch (err) {
      next(err);
    }
  }
}
module.exports = new UserController();

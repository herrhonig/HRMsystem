const jwt = require('jsonwebtoken');
const { Token } = require('../../db/models');

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_KEY, { expiresIn: '24s' });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_KEY, { expiresIn: '30d' });
    return {
      accessToken,
      refreshToken,
    };
  }

  validateAccessToken(token) {
    try {
      // access token check:
      const userData = jwt.verify(token, process.env.JWT_ACCESS_KEY);
      return userData;
    } catch (err) {
      return null;
    }
  }

  validateRefreshToken(token) {
    try {
      // refresh token check:
      const userData = jwt.verify(token, process.env.JWT_REFRESH_KEY);
      return userData;
    } catch (err) {
      return null;
    }
  }

  async saveToken(userId, refreshToken) {
    // проверяем, есть ли токен в БД:
    const tokenData = await Token.findOne({ where: { userId }, raw: true });

    let token;
    if (tokenData) {
      await Token.update({ refreshToken }, {
        where: {
          id: tokenData.id,
        },
      });
    } else {
      token = await Token.create({ userId, refreshToken });
    }
    console.log('TOKEN after created-----');
    return token;
    // если токен уже есть - перезаписываем
    // if (tokenData) {
    //   tokenData.refreshToken = refreshToken;
    //   return tokenData.save();
    // }
    // // либо формируем новый refresh токен
    // const token = await Token.create({ userId, refreshToken });
    // console.log('====token====');
    // return token;
  }

  async removeToken(refreshToken) {
    const tokenData = await Token.destroy({ where: { refreshToken } });
    return tokenData;
  }

  // проверяем, есть ли токен в БД:
  async findToken(refreshToken) {
    const tokenData = await Token.findOne({ where: { refreshToken }, raw: true });
    return tokenData;
  }
}

module.exports = new TokenService();

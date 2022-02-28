const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const { User } = require('../db/models');
const ApiError = require('../exceptions/api-error');
// const userService = require('./service/userService');

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

    try {
      // обработка неверных данных:
      const errors = validationResult(req); // body внутри
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Validation error', errors.array()));
      }
      // передаем входные данные в user service:
      const userData = await userService.signUp(
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
      );
      // кладем рефреш токен в куки:
      // res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
      return res.json(userData);
    } catch (err) {
      next(err);
    }
  }
}

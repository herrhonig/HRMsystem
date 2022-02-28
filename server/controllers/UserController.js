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

  async logOut(req, res, next) {
    try {
      // console.log(req.cookies);
      const { refreshToken } = req.cookies;
      const token = await userService.logout(refreshToken);
      console.log('==== logged out token===', token);
      res.clearCookie('refreshToken');
      return res.json(token);
    } catch (err) {
      next(err);
    }
  }

  async activate(req, res, next) {
    try {
      const activationLink = req.params.link;
      await userService.activate(activationLink);
      return res.redirect(process.env.CLIENT_URL);
    } catch (err) {
      next(err);
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = res.cookies;
      const userData = await userService.refresh(refreshToken);

      // кладем рефреш токен в куки:
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
      return res.json(userData);
    } catch (err) {
      next(err);
    }
  }

  async getUsers(req, res, next) {
    try {
      const users = await userService.getAllUsers();
      return res.json(users);
    } catch (err) {
      next(err);
    }
  }
}
module.exports = new UserController();

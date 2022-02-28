const router = require('express').Router();
// валидация тела запроса:
const { body } = require('express-validator');
const UserController = require('../controllers/UserController');
const authMiddleware = require('../middleware/auth-middleware');

// валидация взодящих данных под регистрацию:
router.post(
  '/signup',
  body('email').isEmail(),
  body('password').isLength({ min: 3, max: 32 }),
  UserController.signUp,
);

router.post('/signin', UserController.signIn);
router.post('/signout', UserController.logOut);
router.get('/activate/:link', UserController.activate);
router.get('/refresh', UserController.refresh);
// middleware только для авторизованных:
router.get('/all', authMiddleware, UserController.getUsers);

// router.post('/check', UserController.checkSession);

module.exports = router;

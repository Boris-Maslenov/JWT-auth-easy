const Router = require('express');
const router = new Router();
const {registration, login, getUsers} = require('./authController');
const {check} = require('express-validator');

router.post('/registration',[ 
    check('username', 'Поле не может быть пустым').notEmpty(),
    check('password', 'Пароль должен быть длинне 4 и меньше 10 символов').isLength({min: 4, max: 10})
 ], registration); // auth/registration
router.post('/login', login); // auth/login
router.get('/users', getUsers); // auth/users

module.exports = router;
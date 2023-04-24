const Router = require('express');
const router = new Router();
const {registration, login, getUsers} = require('./authController');

router.post('/registration', registration); // auth/registration
router.post('/login', login); // auth/login
router.get('/users', getUsers); // auth/users

module.exports = router;
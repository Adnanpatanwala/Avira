const express = require('express');
const router = express.Router();
const {authenticate} = require('../middleware/authentication')
const {registerUser,veifyToken,Login,logout} = require('../Controller/UserController');

router.route('/register').post(registerUser);
router.route('/login').post(Login);
router.route('/logout').delete(authenticate,logout)
router.route('/validate-email').post(veifyToken);


module.exports = router;
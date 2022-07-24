const express = require('express');

const router = express.Router();

const {loginController} = require('../Controllers');

const validateLogin = require('../middlewares/validateLogin')

router.use('/', validateLogin, loginController.findUser);

module.exports = router;
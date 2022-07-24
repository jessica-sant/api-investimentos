const express = require('express');

const router = express.Router();

const {loginController} = require('../Controllers');

router.use('/', loginController.findUser);

module.exports = router;
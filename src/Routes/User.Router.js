const express = require('express');

const router = express.Router();
const {userController} = require('../Controllers')

router.post('/', userController.createUser)

module.exports = router;
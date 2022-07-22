const express = require('express');

const router = express.Router();

const {investimentController} = require('../Controllers');

router.post('/comprar', investimentController.createInvestment)

module.exports = router;
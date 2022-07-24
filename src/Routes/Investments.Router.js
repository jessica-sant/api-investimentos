const express = require('express');

const router = express.Router();

const {investmentController} = require('../Controllers');

router.post('/comprar', investmentController.createInvestment)
router.post ('/vender', investmentController.sellAsset)

module.exports = router;
const express = require('express');

const router = express.Router();
const {accountController} = require('../Controllers')


router.get('/:id', accountController.getWalletById)


module.exports = router;
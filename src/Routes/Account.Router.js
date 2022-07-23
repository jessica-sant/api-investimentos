const express = require('express');

const router = express.Router();
const {accountController} = require('../Controllers');


router.get('/:id', accountController.getWalletById);
router.post('/saque', accountController.withdrawMoney);
// router.post('/deposito',accountController)


module.exports = router;
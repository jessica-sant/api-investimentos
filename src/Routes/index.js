const express = require('express');
const router = express.Router();

const assetsRouter = require('./Assets.Router');
const userRouter = require('./User.Router');
const investimentsRouter = require('./Investments.Router');
const accountRouter = require('./Account.Router');
const loginRouter = require('./Login.Router');

router.use('/ativos', assetsRouter);
router.use('/usuarios', userRouter);
router.use('/investimentos', investimentsRouter);
router.use('/conta', accountRouter );
router.use('/login', loginRouter);

module.exports = router;
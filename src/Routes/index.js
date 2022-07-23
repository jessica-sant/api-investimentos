const express = require('express');
const router = express.Router();

const assetsRouter = require('./Assets.Router');
const userRouter = require('./User.Router');
const investimentsRouter = require('./Investments.Router');
const accountRouter = require('./Account.Router');

router.use('/ativos', assetsRouter);
router.use('/usuarios', userRouter)
router.use('/investimentos', investimentsRouter)
router.use('/conta', accountRouter )

module.exports = router
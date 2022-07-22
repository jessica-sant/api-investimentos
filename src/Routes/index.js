const express = require('express');
const router = express.Router();

const assetsRouter = require('./Assets.Router');
const userRouter = require('./User.Router');
const investimentsRouter = require('./Investments.Router')

router.use('/assets', assetsRouter);
router.use('/users', userRouter)
router.use('/investiments', investimentsRouter)

module.exports = router
const express = require('express');
const router = express.Router();

const assetsRouter = require('./Assets.Router');
const userRouter = require('./User.Router');

router.use('/assets', assetsRouter);
router.use('/users', userRouter)

module.exports = router
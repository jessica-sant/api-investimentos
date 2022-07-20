const express = require('express');
const router = express.Router();

const assetsRouter = require('./Assets.Router')

router.use('/assets', assetsRouter)

module.exports = router
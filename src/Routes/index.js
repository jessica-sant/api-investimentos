const express = require('express');
const router = express.Router();

const assetsRouter = require('./Assets.Router');
const userRouter = require('./User.Router');
const investimentsRouter = require('./Investments.Router');
const accountRouter = require('./Account.Router');
const loginRouter = require('./Login.Router');

const validateJWT = require('../middlewares/validateToken');

router.use('/ativos', assetsRouter);
router.use('/usuarios', userRouter);
router.use('/investimentos', validateJWT, investimentsRouter);
router.use('/conta', validateJWT, accountRouter );
router.use('/login', loginRouter);

module.exports = router;
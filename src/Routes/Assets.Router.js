const express = require('express');

const router = express.Router();
const {assetsController} = require('../Controllers')

router.get('/', assetsController.getAllAssets)



module.exports = router;
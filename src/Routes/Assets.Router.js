const express = require('express');

const router = express.Router();
const {assetsController} = require('../Controllers')

router.get('/', assetsController.getAllAssets)

router.get('/:id', assetsController.getAssetById)

module.exports = router;
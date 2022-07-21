const express = require('express');

const router = express.Router();
const {assetsController} = require('../Controllers')

router.get('/', assetsController.getAllAssets)

router.get('/:id', assetsController.getAssetById)

router.get('/client/:id', assetsController.getUserWithAsset)

module.exports = router;
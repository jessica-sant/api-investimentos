const express = require('express');

const router = express.Router();
const {assetsController} = require('../Controllers');

const validateJWT = require('../middlewares/validateToken')

router.get('/', assetsController.getAllAssets)

router.get('/:id', assetsController.getAssetById)

router.get('/client/:id',validateJWT, assetsController.getUserWithAsset)

module.exports = router;
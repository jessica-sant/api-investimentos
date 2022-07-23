const {assetsService} = require('../Services')

const getAllAssets = async (_req, res) => {
  const assets = await assetsService.getAllAssets();
  res.status(200).json(assets);
}


const getAssetById = async(req, res) => {
  const {id} = req.params;
  const asset = await assetsService.getAssetById(id);
  res.status(200).json(asset);
}

const getUserWithAsset = async(req, res) => {
  const {id} = req.params;
  const user = await assetsService.getUserWithAsset(id);
  res.status(200).json(user);
}

module.exports = {
  getAllAssets,
  getAssetById,
  getUserWithAsset
}
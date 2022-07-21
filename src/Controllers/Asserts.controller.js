const {assetsService} = require('../Services')

const getAllAssets = async (_req, res) => {
  const assets = await assetsService.getAssets();
  res.status(200).json(assets);
}

const getAssetById = async(req, res) => {
  const {id} = req.params;
  const asset = await assetsService.getAssetById(id);
  res.status(200).json(asset);
}

module.exports = {
  getAllAssets,
  getAssetById
}
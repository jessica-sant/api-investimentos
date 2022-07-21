const {assetsService} = require('../Services')

const getAllAssets = async (_req, res) => {
  const assets = await assetsService.getAssets();
  res.status(200).json(assets);
}

module.exports = {
  getAllAssets
}
const connection = require('../db/connection');

const getAllAssets = () => {
  return connection.execute(`SELECT assetId, name, stock, value, sum(quantity * value) as totalInvested FROM AppInvest.investments i
  INNER JOIN AppInvest.assets a
  on i.assetId = a.id
  group by assetId`);
}

const getAssetById = (id) => {
  return connection.execute('SELECT * FROM assets WHERE id = ?', [id])
}

const getUserWithAsset = (id) => {
  return connection.execute(`SELECT userId, assetId, quantity, value FROM investments i
  INNER JOIN assets a
  ON i.assetId = a.id
  where userId = ? and quantity > 0`,[id])
}

module.exports = {
  getAllAssets,
  getAssetById,
  getUserWithAsset
}
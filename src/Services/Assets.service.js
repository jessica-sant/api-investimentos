const {assetsModel} = require('../Models');

const getAssets = async () => {
  const [row] = await assetsModel.getAll()
  return row;
}

module.exports = {
  getAssets
}
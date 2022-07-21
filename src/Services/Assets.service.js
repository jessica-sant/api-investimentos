const {assetsModel} = require('../Models');
const CustomException = require('../utils/CustomException');

const getAssets = async () => {
  const [data] = await assetsModel.getAll();
  return data;
}

const getAssetById = async (id) => {
  const [data] = await assetsModel.getById(id);

  if(!data || data.length === 0){
    return CustomException({ message: 'asset not found', status:404 })
  }
  const {nome, ...rest}= data[0];
  return rest;
}

module.exports = {
  getAssets,
  getAssetById
}
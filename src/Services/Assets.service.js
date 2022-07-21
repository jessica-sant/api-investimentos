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

const getUserWithAsset = async(id) => {
  const [data] = await assetsModel.getUserWithAsset(id);

  if(!data || data.length === 0){
    return CustomException({ message: 'User does not exist', status:404 })
  }

  return data;
}

module.exports = {
  getAssets,
  getAssetById,
  getUserWithAsset
}
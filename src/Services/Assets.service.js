const { assetsModel } = require('../Models');
const CustomException = require('../utils/CustomException');

const getAllAssets = async () => {
  const [data] = await assetsModel.getAllAssets();
  return data;
};

const getAssetById = async (id) => {
  const [data] = await assetsModel.getAssetById(id);

  if (!data || data.length === 0) {
    return CustomException({ message: 'asset does not exist', status: 404 });
  }
  const { name, ...rest } = data[0];
  return rest;
};

const getUserWithAsset = async (id, userId) => {
  if (Number(id) !== userId) {
    return CustomException({ message: 'Unauthorized user', status: 401 });
  }

  const [data] = await assetsModel.getUserWithAsset(id);

  if (!data || data.length === 0) {
    return CustomException({ message: 'User does not exist', status: 404 });
  }

  return data;
};

module.exports = {
  getAllAssets,
  getAssetById,
  getUserWithAsset,
};

const { accountModel } = require('../Models');
const CustomException = require('../utils/CustomException');

const getWalletById = async (id) => {
  const [data] = await accountModel.getWalletById(id);
  if (!data) {
    return CustomException({ message: 'NOT FOUND', status: 404 });
  }
  return data;
};

const withdrawMoney = async (id, value) => {
  const [data] = await accountModel.getWalletById(id);
  if(value > data.balance || value <= 0){
    return CustomException({ message: 'insufficient balance', status: 404 });
  }
  await accountModel.withdrawMoney(id, value);
  return {id, value};
}

const depositMoney = async (id, value) => {
  const [data] = await accountModel.getWalletById(id);
  if(value <= 0){
    return CustomException({ message: 'Invalid value', status: 404 });
  }
  await accountModel.depositMoney(id, value);
  return {id, value};
}

module.exports = {
  getWalletById,
  withdrawMoney,
  depositMoney
};

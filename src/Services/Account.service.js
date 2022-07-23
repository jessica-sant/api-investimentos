const { accountModel } = require('../Models');
const CustomException = require('../utils/CustomException');

const getWalletById = async (codCliente) => {
  const [data] = await accountModel.getWalletById(codCliente);
  if (!data) {
    return CustomException({ message: 'NOT FOUND', status: 404 });
  }
  return data;
};

const withdrawMoney = async (codCliente, valor) => {
  const [data] = await accountModel.getWalletById(codCliente);
  if(valor > data.saldo || valor <= 0){
    return CustomException({ message: 'saldo insuficiente', status: 404 });
  }
  await accountModel.withdrawMoney(codCliente, valor);
  return {codCliente, valor};
}

module.exports = {
  getWalletById,
  withdrawMoney
};

const {accountModel} = require('../Models');
const CustomException = require('../utils/CustomException');

const getWalletById = async (codCliente) => {
  const [data] = await accountModel.getWalletById(codCliente);
    if(!data){
      return CustomException({ message: 'NOT FOUND', status:404 })
    }
  return data;
}

module.exports = {
  getWalletById
}
const connection = require('../db/connection');

const getWalletById = async (codCliente) => {
  const [data] = await connection.execute(`SELECT userId as codCliente, saldo FROM AppInvest.carteira
  WHERE userId = ?`, [codCliente]);
  return data;
}

module.exports = {
  getWalletById,
}
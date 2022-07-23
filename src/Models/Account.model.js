const connection = require('../db/connection');

const getWalletById = async (codCliente) => {
  const [data] = await connection.execute(
    `SELECT userId as codCliente, saldo FROM AppInvest.carteira
  WHERE userId = ?`,
    [codCliente]
  );
  return data;
};

const withdrawMoney = async (codCliente, valor) => {
  const [data] = await connection.execute(
    `UPDATE AppInvest.carteira SET saldo = (saldo - ?)
  WHERE userId = ?`,
    [valor, codCliente]
  );
  return data;
};

const depositMoney = async (codCliente, valor) => {
  const [data] = await connection.execute(
    `UPDATE AppInvest.carteira SET saldo = (saldo + ?)
  WHERE userId = ?`,
    [valor, codCliente]
  );
  return data;
};

module.exports = {
  getWalletById,
  withdrawMoney,
  depositMoney
};

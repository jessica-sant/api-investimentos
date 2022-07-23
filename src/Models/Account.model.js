const connection = require('../db/connection');

const getWalletById = async (id) => {
  const [data] = await connection.execute(
    `SELECT userId, balance FROM wallet
  WHERE userId = ?`,
    [id]
  );
  return data;
};

const withdrawMoney = async (id, value) => {
  const [data] = await connection.execute(
    `UPDATE  AppInvest.wallet SET balance = (balance - ?)
  WHERE userId = ?`,
    [value, id]
  );
  return data;
};

const depositMoney = async (id, value) => {
  const [data] = await connection.execute(
    `UPDATE wallet SET balance = (balance + ?)
  WHERE userId = ?`,
    [value, id]
  );
  return data;
};


module.exports = {
  getWalletById,
  withdrawMoney,
  depositMoney
};

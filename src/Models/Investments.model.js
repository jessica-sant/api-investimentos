const connection = require('../db/connection');

const create = async (order) => {
  const {userId, assetId, quantity} = order;  
  const [newInvestment] = await connection.execute(
    'INSERT INTO investments (userId, assetId, quantity) VALUE (?,?,?)',
    [userId, assetId, quantity],
  );

  return newInvestment;
}

const getInvestments = async (userId,assetId ) => {
  const [data] = await connection.execute(`SELECT * FROM investments
  where userId = ? and assetId = ?`, [userId, assetId])
  return data[0];
};

const updateQuantity= async (quantity, userId, assetId) => {
  const [data] = await connection.execute(`UPDATE investments SET quantity = ? WHERE userId = ? and assetId = ?`, [quantity, userId, assetId]);

  return data;
}

const updateSaldo = async (userId, balance) => {
  const [saldoUsuario] = await connection.execute(`UPDATE wallet SET balance = ? WHERE id = ?`, [balance, userId]);

  return saldoUsuario;
}

const updateStock = async (stock, idAtivo) => {
  const [stockAtivo] = await connection.execute(`UPDATE assets SET stock = ? WHERE id = ?`, [stock, idAtivo]);

  return stockAtivo;
}


module.exports = {
  create,
  updateQuantity,
  updateStock,
  getInvestments,
  updateSaldo
}
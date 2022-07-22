const connection = require('../db/connection');

const create = async (pedido) => {
  const {usuarioId, ativoId, quantidade} = pedido;  
  const [investimento] = await connection.execute(
    'INSERT INTO AppInvest.investimentos (usuarioId, ativoId, quantidade) VALUE (?,?,?)',
    [usuarioId, ativoId, quantidade],
  );

  return investimento;
}


const getWallet = async (idUser) => {
  const [wallet] = await connection.execute(`SELECT * FROM AppInvest.carteira
  WHERE userId = ?`, [idUser])
  return wallet[0];
}

const getInvestiments = async (idUser,IdAtivo ) => {
  const [result] = await connection.execute(`SELECT * FROM AppInvest.investimentos
  where usuarioId = ? and ativoId = ?`, [idUser, IdAtivo])
  return result[0];
};

const updateQuantity= async (quantidade, idUser, IdAtivo) => {
  const [order] = await connection.execute(`UPDATE AppInvest.investimentos SET quantidade = ? WHERE usuarioId = ? and ativoId = ?`, [quantidade, idUser, IdAtivo]);

  return order;
}

const updateSaldo = async (idUser, saldo) => {
  const [saldoUsuario] = await connection.execute(`UPDATE AppInvest.carteira SET saldo = ? WHERE id = ?`, [saldo, idUser]);

  return saldoUsuario;
}

const updateStock = async (stock, idAtivo) => {
  const [stockAtivo] = await connection.execute(`UPDATE AppInvest.ativos SET estoque = ? WHERE id = ?`, [stock, idAtivo]);

  return stockAtivo;
}

module.exports = {
  create,
  updateQuantity,
  updateSaldo,
  updateStock,
  getWallet,
  getInvestiments
}
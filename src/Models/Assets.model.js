const connection = require('../db/connection');

const getAll = () => {
  return connection.execute('SELECT * FROM AppInvest.ativos');
}

const getById = (id) => {
  return connection.execute('SELECT * FROM AppInvest.ativos WHERE id = ?', [id])
}

const getUserWithAsset = (id) => {
  return connection.execute(`SELECT usuario_id, ativo_id, quantidade, valor FROM AppInvest.investimentos i
  INNER JOIN AppInvest.ativos a
  ON i.ativo_id = a.id
  where usuario_id = ?`,[id])
}

module.exports = {
  getAll,
  getById,
  getUserWithAsset
}
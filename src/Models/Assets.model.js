const connection = require('../db/connection');

const getAll = () => {
  return connection.execute('SELECT * FROM AppInvest.ativos');
}

const getById = (id) => {
  return connection.execute('SELECT * FROM AppInvest.ativos WHERE id = ?', [id])
}

module.exports = {
  getAll,
  getById,
}
const connection = require('../db/connection');

const getAll = () => {
  return connection.execute('SELECT * FROM AppInvest.ativos');
}

module.exports = {
  getAll
}
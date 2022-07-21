const connection = require('../db/connection')

const create = async (user) => {
  const [newUser] = await connection.execute(
    'INSERT INTO AppInvest.usuarios (nome, email, senha) VALUES (?,?,?)',
    [user.nome, user.email, user.senha],
  );

  return newUser;
}

module.exports = {
  create,
}
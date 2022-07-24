const connection = require('../db/connection')

const getUserByEmail = async (email) => {
  const [user] = await connection.execute(`SELECT * FROM users WHERE email = ?`, [email])
  return user;
}

const findUser = async (email, password) => {
  const [user] = await connection.execute(`SELECT * FROM users
  WHERE email = ? and password = ?`, [email, password])
  return user;
}

const createUser = async (user) => {
  const [newUser] = await connection.execute(
    'INSERT INTO users (name, email, password) VALUES (?,?,?)',
    [user.name, user.email, user.password],
  );

  return newUser;
}

module.exports = {
  createUser,
  findUser,
  getUserByEmail
}
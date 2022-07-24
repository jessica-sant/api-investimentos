const connection = require('../db/connection')

const findUser = async (email, password) => {
  const [user] = await connection.execute(`SELECT * FROM users
  where email = 'aaaaa@aaa.aaa' and password = 'password1'`, [email, password])
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
  findUser
}
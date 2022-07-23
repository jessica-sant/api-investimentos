const connection = require('../db/connection')

const createUser = async (user) => {
  const [newUser] = await connection.execute(
    'INSERT INTO users (name, email, password) VALUES (?,?,?)',
    [user.name, user.email, user.password],
  );

  return newUser;
}

module.exports = {
  createUser,
}
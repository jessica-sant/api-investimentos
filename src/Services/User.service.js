const bcrypt = require('bcryptjs');
const {userModel} = require('../Models');

const createUser = async (user) => {
  const salt = bcrypt.genSaltSync(3);
  user.password = bcrypt.hashSync(user.password, salt);

  const {insertId} = await userModel.createUser(user)
  const newUser = {
    id: insertId,
    ...user
  }
  return newUser;
}

module.exports = {
  createUser
}
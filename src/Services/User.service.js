const bcrypt = require('bcryptjs');
const {userModel} = require('../Models');

const createUser = async (user) => {
  const salt = bcrypt.genSaltSync(3);
  user.senha = bcrypt.hashSync(user.senha, salt);

  const {insertId} = await userModel.create(user)
  user.id = insertId;
  return user;
}

module.exports = {
  createUser
}
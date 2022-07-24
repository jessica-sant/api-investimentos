const bcrypt = require('bcryptjs');
const CustomException = require('../utils/CustomException');
const { userModel } = require('../Models');

const createUser = async (user) => {
  const { email } = user;
  const emailExists = await userModel.getUserByEmail(email);

  if (emailExists.length > 0) {
    return CustomException({ message: 'User already registered', status: 409 });
  }

  const salt = bcrypt.genSaltSync(3);
  user.password = bcrypt.hashSync(user.password, salt);

  const { insertId } = await userModel.createUser(user);
  const newUser = {
    id: insertId,
    ...user,
  };
  return newUser;
};

module.exports = {
  createUser,
};

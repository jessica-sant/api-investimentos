const {userService} = require('../Services');

const createUser = async (req, res) => {
  const user = await userService.createUser(req.body);  
  res.status(201).json();
}

module.exports = {
  createUser
}
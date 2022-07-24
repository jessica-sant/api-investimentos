const {loginService} = require('../Services');

const findUser = async (req, res) => {
  const token = await loginService.findUser(req.body);  
  res.status(200).json({token});
}

module.exports = {
  findUser
}
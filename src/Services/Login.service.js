const {userModel} = require('../Models');
const CustomException = require('../utils/CustomException');
const {generateJWTToken} = require('../utils/JwtToken')


const findUser = async ({email, password}) => {
  const [user] = await userModel.findUser(email, password);
  
  if(!user){
    return CustomException({ message: 'user does not exist', status:400 })
  }

  const {password:passWord, ...rest} = user;
  const token = generateJWTToken(rest)
  return token;
}

module.exports = {
  findUser
}
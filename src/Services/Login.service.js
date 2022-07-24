const {userModel} = require('../Models');
const CustomException = require('../utils/CustomException');
const {generateJWTToken} = require('../utils/JwtToken')


const findUser = async ({email, password}) => {
  const [user] = await userModel.findUser(email, password);
  console.log("🚀 ~ file: Login.service.js ~ line 8 ~ findUser ~ user", user)
  
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
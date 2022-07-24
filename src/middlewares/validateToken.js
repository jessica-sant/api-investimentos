const CustomException = require('../utils/CustomException');
const { authenticateToken } = require('../utils/JwtToken');

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return CustomException({ message: 'Token not found', status: 401 });
  }

  const payload = authenticateToken(token); 

  if (payload.error) {
    return CustomException({ message: 'Expired or invalid token', status: 401 });
  }
  res.locals.payload = payload;
  next();
};

module.exports = validateToken;
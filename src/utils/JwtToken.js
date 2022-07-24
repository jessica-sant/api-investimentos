require('dotenv').config();

const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET || 'blBIBCHBDBCHYIGCIUBCIDCDhugugus';

const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
};

const generateJWTToken = (payload) => jwt.sign(payload, SECRET, jwtConfig);

const authenticateToken = (token) => {
  try {
      const introspection = jwt.verify(token, SECRET);
      return introspection;
  } catch (e) {
      return { error: true, e };
  }
};
module.exports = {
  generateJWTToken,
  authenticateToken,
};
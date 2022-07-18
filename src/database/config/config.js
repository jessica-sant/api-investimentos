require('dotenv').config()


const options = {
  host: process.env.HOSTNAME,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DB_NAME,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD ,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
}

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
}




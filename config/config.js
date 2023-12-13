const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const setting = {
  url: process.env.DB_URI,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
      require: true,
    },
  },
};

module.exports = {
  development: { ...setting },
  test: { ...setting},
  production: { ...setting}
};
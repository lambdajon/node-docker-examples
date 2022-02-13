'use strict';
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  app: {
    PORT: process.env.PORT || 8000
  },
  db: {
    URL: process.env.DB_URL || 'mongodb://localhost:27017'
  }
};

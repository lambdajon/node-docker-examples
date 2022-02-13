'use strict';

const mongoose = require('mongoose');
const config = require('./config');
class Database {
  async connect() {
    try {
      return await mongoose.connect(config.db.URL);
    } catch (e) {
      throw new Error(e);
    }
  }
}

module.exports = new Database();

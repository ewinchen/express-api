const mongoose = require('mongoose');
const DB_URL = process.env.DB_URL || 'mongodb://localhost/fsr';

const options = {
  autoIndex: false,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  poolSize: 10,
  bufferMaxEntries: 0,
  keepAlive: true
};

function connectDB() {
  return mongoose.connect(DB_URL, options)
}

function disconnnectDB() {
  return mongoose.disconnect()
}

module.exports = {
  connectDB,
  disconnnectDB
}


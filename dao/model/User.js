const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  sex: String,
  birthDate: Date,
  createAt: {type: Date, default: Date.now()},
})

const User = mongoose.model('User', userSchema);

module.exports = User;
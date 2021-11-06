const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  userName: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true}
});

module.exports = mongoose.model('User', User);
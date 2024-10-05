// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userid: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  city: { type: String, required: true },
  doj: { type: String, required: true }, // Date of Joining
  salary: { type: Number, required: true },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;

const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: true,
    },
    createdAt: { type: Date, default: Date.now },
    updateddAt: { type: Date, default: Date.now }
  }
);

module.exports = model('User', userSchema);
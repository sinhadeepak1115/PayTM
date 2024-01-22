const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTION_STRING);


const schema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 4,
    maxlength: 20,
    lowercase: true,
    trim: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 4,
  },
})

module.exports = mongoose.model("User", schema)

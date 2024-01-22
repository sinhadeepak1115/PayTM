const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTION_STRING);


const schema = mongoose.Schema({
  FirstName: String,
  lastName: String,
  password: String,

})

module.exports = mongoose.model("User", schema)

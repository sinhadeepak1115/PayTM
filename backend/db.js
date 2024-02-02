import mongoose from "mongoose";
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017')

const userSchema = new Schema({
  username: {
    type: String,
    require: true
  },
  firstName: {
    type: String,
    require: true
  },
  lastName:
  {
    type: String,
    require: true
  },

  password: {
    type: String,
    require: true

  }
})

module.exports = mongoose.model("User", userSchema)

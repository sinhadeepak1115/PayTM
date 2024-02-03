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

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to User model
    ref: 'User',
    required: true
  },
  balance: {
    type: Number,
    required: true
  }
});

const Account = mongoose.model('Account', accountSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
  User,
  Account,
};

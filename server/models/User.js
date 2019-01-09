const mongoose = require('mongoose')

const User = new mongoose.Schema({
  id: String,
  accessToken: String,
  comments: String,
  provider: String,
  name: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('User', User)

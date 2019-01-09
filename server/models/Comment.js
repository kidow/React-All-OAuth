const mongoose = require('mongoose')
const { Schema } = mongoose
const {
  Types: { ObjectId }
} = Schema

const Comment = new mongoose.Schema({
  commenter: {
    type: ObjectId,
    ref: 'User'
  },
  comment: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = new mongoose.model('Comment', Comment)

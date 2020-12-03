const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
  commenter: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  createdat: {
    type: Date,
    default: Date.now 
  }
})
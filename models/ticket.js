const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ticketSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  projectname: {
    type: String,
    required: true
  },
  developerassigned: {
    type: String,
    required: false
  },
  submitter: {
    type: String,
    required: false
  },
  project: {
    type: String,
    required: true
  },
  ticketpriority: {
    type: String,
    default: "low"
  },
  ticketstatus: {
    type: String,
    required: false
  },
  tickettype: { // other commens, bugs/errors
    type: String,
    required:
  },


  createdat: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: String,
    required: false
  }
})
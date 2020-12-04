const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema({
  projectname: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  assignedpersonnel: {
    type: Array,
    default: [] // will be array of personnel
  },
  ticketsforproject: {
    type: Array,
    default: []
  },
})

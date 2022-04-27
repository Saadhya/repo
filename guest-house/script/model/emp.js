const mongoose = require('mongoose')
const empSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  country: {
   type: String,
   required: true
  },
})


module.exports = mongoose.model('Emp', empSchema)
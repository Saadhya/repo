const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
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
  issuedId: {
    type: String,
    required: true
  },
  arrivalDate: {
    type: Date,
    required: true
  },
  departureDate: {
    type: String,
    required: true
  },
  country: {
   type: String,
   required: true
  },
  numOfPerson: {
    type: String,
    required: true
   },
  specialRequest: {
    type: String,
    required: true
  },
  paymentMethod:{
    type:String,
    required:true
  }
})


module.exports = mongoose.model('User', userSchema)
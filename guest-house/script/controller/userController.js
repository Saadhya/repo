const User = require('../model/user')
const mongoose = require('mongoose')

function create(req,res,next){
  let {firstname, lastname, email, issuedId,
    arrivalDate, departureDate, country, numOfPerson, specialRequest, paymentMethod,
 } = req.body;
  let user = new User({
    firstname, lastname, email, country, issuedId,
    arrivalDate, departureDate, country, numOfPerson, specialRequest, paymentMethod,
  })
  user.save().then((data)=>{
    res.send(data)
  })
//   let empMobile = req.body.empMobile;
}

function view(req,res,next){
    User.find({}).then((data)=>{
      res.send(data)
    })
}
module.exports.create = create
module.exports.view = view
const Emp = require('../model/emp')
const mongoose = require('mongoose')

function create(req,res,next){
  let {firstname, lastname, email, country} = req.body;
  let emp = new Emp({
    firstname, lastname, email, country,   
  })
  emp.save().then((data)=>{
    res.send(data)
  })
//   let empMobile = req.body.empMobile;
}
module.exports.create = create


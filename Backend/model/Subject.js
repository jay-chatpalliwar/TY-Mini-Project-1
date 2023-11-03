const mongoose = require('mongoose')

const Subject =  new mongoose.Schema({
  
  coursecode:
  {
  type:String,
  },
  coursetitle:{
  type:String,
  },
  grade:
  {
   type:String
  } 
})
module.exports = mongoose.model('Subject',Subject);



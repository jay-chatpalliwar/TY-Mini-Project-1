const mongoose = require('mongoose')

const Comment =  new mongoose.Schema({
  
  user_id:
  { 
   type:mongoose.Schema.Types.ObjectId,
   ref:'User'
  },
  body:{
  type:String,
  },
  created_At:
  {
   type:Date
  }
})
module.exports = mongoose.model('Comment',Comment);



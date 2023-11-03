const mongoose = require('mongoose')

const Reply =  new mongoose.Schema({
  user_id:
  { 
   type:mongoose.Schema.Types.ObjectId,
   ref:'User'
  },
  body:
  {
   type:String
  },
  created_At:
  {
   type:Date
  }
  
})
module.exports = mongoose.model('Reply',Reply);



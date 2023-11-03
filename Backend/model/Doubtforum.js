const mongoose = require('mongoose')

const Doubtforum =  new mongoose.Schema({
  user_id:
  { 
   type:mongoose.Schema.Types.ObjectId,
   ref:'User'
  },
  body:
  {
   type:String
  },
  reply:
  {
   type:String,
   ref:'Reply'
  },
  created_At:
  {
   type:Date
  }
  
})
module.exports = mongoose.model('Doubtforum',Doubtforum);



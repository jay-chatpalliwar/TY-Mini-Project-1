const mongoose = require('mongoose')

const Blog =  new mongoose.Schema({
  created_by:
  { 
   type:mongoose.Schema.Types.ObjectId,
   ref:'User'
  },
  title:
  {
   type:String
  },
  body:
  {
   type:String
  },
  created_At:
  {
   type:Date
  },
  comments:
  {type:mongoose.Schema.Types.ObjectId,
   ref:'Comment'
  }
  
})
module.exports = mongoose.model('Blog',Blog);



const mongoose = require('mongoose')

const Resource =  new mongoose.Schema({
   type:
   {
    type:String
   },
   link:
   {
   type:String
   },
   author:
   {
    type:String
   },
   image:
   {
    type:String
   }
})
module.exports = mongoose.model('Resource',Resource);



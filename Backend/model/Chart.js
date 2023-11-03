const mongoose = require('mongoose')

const Chart =  new mongoose.Schema({
  
  name:
  {
   type:String
  },
  data:
  {
   type:String
  }
  
})
module.exports = mongoose.model('Chart',Chart);



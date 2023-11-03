const { default: mongoose } = require('mongoose');
const Resource = require('../../models/Resource');
const User = require('../../models/User');
const { cloudUpload } = require('../../utils/cloudUpload');

exports.createResource =async(req,res)=>{
try
{ 
  const id= req.body.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ success: false, message: 'Invalid user ID' });
    }
  const user = await User.findById({_id:id});
  
   if(!user) return res.status(400).json({success:false,message:'No user found'})
   
   const {links,tags,title,difficulty,desc,image,type}=req.body;
   
   let imgurl;
   if(image) imgurl= await cloudUpload(image);
   else imgurl='https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-open-book-education-day_23-2149241017.jpg?size=626&ext=jpg&ga=GA1.1.657716422.1697810739&semt=ais'
   
   const resource = await Resource.create({
   link:links,
   type:type,
   difficulty:difficulty,
   desc:desc,
   imgurl:imgurl,
   title:title,
   tags:tags,
   author:user.name
   })
  
   user.resources.push(resource._id);
   
   await user.save();
  
   res.status(200).json({
   success:'true',
   message:'Resource created successfully',
   resource:resource
   })
   
   
}
catch(e)
{
  return res.status(500).json({
  success:false,
  message:'Error occured while creating a resource',
  error:e.message
  })
}

}

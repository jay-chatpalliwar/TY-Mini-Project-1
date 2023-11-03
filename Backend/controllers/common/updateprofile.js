const User = require("../../models/User");
const { cloudUpload } = require("../../utils/cloudUpload");

exports.updateprofile = async(req,res)=>{
    try{
        //auth route will be in between
        const email = req.user.email;
        
        const profile = await User.findOne({ email: email });
        
        const {name,gender,mobile,branch,institute,specialization,year,sem}= req.body;
        
        
        if(name) profile.name = name;
        if(gender) profile.gender=gender;
        if(mobile) profile.mobile=mobile;
        if(branch) profile.branch=branch;
         if(institute) profile.institute=institute;
        if(specialization) profile.specialization = specialization;
        if(year) profile.year = year;
        if(sem) profile.current_sem = sem;
        if(req.files)
        { 
            
            if(req.files.image)
            {
                profile.image = await cloudUpload(req.files.image);
                console.log(profile.image);
            }
        }

        await profile.save();
         res.status(200).json({
            success:true,
            message:'Profile updated successfully',
            profile:profile
        })

    }
    catch(e)
    {
        res.status(500).json({
            success:false,
            message:'Error in updateprofile',
            error:e.message
        })
    }
}
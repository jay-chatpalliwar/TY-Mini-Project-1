const nodemailer = require('nodemailer');


exports.mailSender =async(subject,description,to)=>{
    try{
       
        const transporter = nodemailer.createTransport({
            host:'smtp.gmail.com',
            port: 465, 
            secure: true, 
            auth:{
                user:process.env.ADMIN,
                pass:process.env.GPASS
            }
        })

        const mail = await transporter.sendMail({
            from:'PROJECT',
            to:to,
            subject:subject,
            html:description
            
        })
         
        console.log("mail sent successfully");
        return mail;
    }
    catch(e)
    {
       console.log("error in sending mail - "+e.message);
    }
}

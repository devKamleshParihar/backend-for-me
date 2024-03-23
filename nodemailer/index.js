const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service:'outlook',
    auth:{
        user:'pariharkamlesh16102003@outlook.com',
        pass:'H@unny7425'
    }
});

const mailOptions = {
    from:'pariharkamlesh16102003@outlook.com',
    to:'sahilparihar16102002@gmail.com',
    // cc:'khushiparihar71198@gmail.com',
    // bcc:'khushiparihar71198@gmail.com',
    subject:'verification email',
    text:'hii, your are verfied user'
};

transporter.sendMail(mailOptions,(error,info)=>{
    if(error)
    {
        console.log('error sending mail',error);
    }
    else{
        console.log('mail  send',info.response);
    }


});
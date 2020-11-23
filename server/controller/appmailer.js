const nodemailer = require('nodemailer');

function mymailer(data,cb)
{
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'meanstackweekend@gmail.com',
    pass: 'universalindore'
  }
});

const mailOptions = {
  from: 'meanstackweekend@gmail.com',
  to: data.email,
  subject: 'PostKrde.com verification mail!!!',
  html: '<h1>Successfully registered on PostKrde.com</h1><h3>Username : '+data.email+'</h3><h3>Password : '+data.pass+'</h3><br><b>Click on the link below to verify your account</b><br><br>http://localhost:3000/webapi/verifyaccount?email='+data.email
  
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    cb()
  }
}); 
}

module.exports={mymailer:mymailer}

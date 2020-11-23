const nodemailer = require('nodemailer');

function mymailer(data,cb)
{
    //console.log(data)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'meanstackweekend@gmail.com',
    pass: 'universalindore'
  }
});

const mailOptions = {
  from: 'meanstackweekend@gmail.com',
  to: data[0].email,
  subject: 'your password',
  html: '<h3>Password : '+data[0].pass+'</h3><br><b>Click http://localhost:3000/login'
  
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

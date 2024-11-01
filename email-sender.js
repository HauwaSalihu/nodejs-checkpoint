import nodemailer from "nodemailer"

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aberdeencommercial@gmail.com',
    pass: 'Aberdeen-1234'
  }
});

var mailOptions = {
  from: 'aberdeencommercial@gmail.com',
  to: 'hauwasalih1010@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
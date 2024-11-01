import nodemailer from 'nodemailer';

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aberdeencommercial@gmail.com',
    pass: 'vntl ewsj qbib yfgk'
  }
});

// Define the mail options
const mailOptions = {
  from: 'aberdeencommercial@gmail.com',
  to: 'hauwasalih1010@gmail.com',
  subject: 'Test Email from Node.js',
  text: 'Hello, this is a test email sent using nodemailer!'
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(`Error: ${error}`);
  }
  console.log(`Email sent: ${info.response}`);
});

const nodemailer = require('nodemailer');

// Create transporter
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'samaaaah@gmail.com', // replace with your email
    pass: 'my-password'     // use app password, not your real password
  }
});

// Email options
let mailOptions = {
  from: 'samaaaah@gmail.com',
  to: 'maroua@gmail.com',
  subject: 'Test Email from Node.js',
  text: 'Hello! This is a test email.'
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});

// Replace 'your_key' with your own secret key
var nodemailer = require('nodemailer');

// Define the recipient's email address
var to = 'recipient@example.com';

// Define the subject and body of the email message
var subject = 'Math Homework Assignment';
var body = 'Please find attached the math homework for today.';

// Create a new transporter instance with your secret key
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your_email@gmail.com', // Replace with your email address
        pass: 'your_password' // Replace with your secret key
    }
});

// Send the email to the recipient's email address
transporter.sendMail({
    from: 'sender@example.com',
    to: to,
    subject: subject,
    text: body
}, function(error, info) {
    if (error) {
        console.log('Message could not be sent. Email: %s', error);
    } else {
        console.log('Message sent: %s', info.messageId);
    }
});

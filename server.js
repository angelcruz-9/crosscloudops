const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { firstName, lastName, email, phoneNumber, message } = req.body;

  // Set up Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@example.com',
      pass: 'your-email-password',
    },
  });

  const mailOptions = {
    from: email,
    // to: ['info@crosscloudops.com', 'HR@crosscloudops.com'],
    to: 'ravikumarcse123@gmail.com',
    subject: 'New Signup Form Submission',
    text: `You have a new signup form submission.\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send(error.toString());
    }
    console.log('Email sent:', info.response);
    res.status(200).send('Email sent successfully');
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

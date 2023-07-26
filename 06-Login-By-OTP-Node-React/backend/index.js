const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const twilio = require('twilio');
const secretKey = "nadadsdkahdiaE67^3623H2J243J3H3";
const session = require('express-session'); // Import express-session


const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use(
    session({
      secret: secretKey, // Replace 'your_secret_key' with a random secret key
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false } // Set it to true if using HTTPS
    })
  );

// MongoDB setup
const mongoURI = 'mongodb://127.0.0.1:27017/react_node_login';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

// Replace 'your_twilio_account_sid' and 'your_twilio_auth_token' with your Twilio credentials
const accountSid = 'AC33bc8a930b449e5faba1c09a578f5662';
const authToken = 'ddbf9ce863b748860a0a46d76a389de9';
const client = twilio(accountSid, authToken);

// Twilio SMS API endpoint
app.post('/api/sendOTP', (req, res) => {
  const { mobile } = req.body;

  // Generate a 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000);

  // Store the OTP in the session (You can use Redis or other session storage in a production environment)
  req.session.otp = otp;

  // Send OTP via SMS
  client.messages.create({
    body: `Your OTP for login is ${otp}`,
    from: '+919754155476',
    to: mobile
  })
  .then(() => res.json({ success: true }))
  .catch((err) => res.status(500).json({ error: err.message }));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

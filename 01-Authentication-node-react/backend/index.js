// index.js
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./userRoutes.js');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

// Middleware setup
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.json());


mongoose.Promise = global.Promise;
// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/authentication', {useNewUrlParser: true})
  .then(() => {
    console.log(`Connected to  ${'mongodb://127.0.0.1:27017/authentication'}`);
  })
  .catch((err) => {
    console.error('MongoDB connection failed:', err);
  });

// Use the userRoutes
app.use('/api', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

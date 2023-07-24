// index.js
const express = require('express');
const mongoose = require('mongoose');
const Router = require('./mail.route.js');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

// Middleware setup
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.json());



// Use the userRoutes
app.use('/api', Router);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});





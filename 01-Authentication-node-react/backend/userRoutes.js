// userRoutes.js
const express = require('express');
const Router = express.Router();
const User = require('./user.model');
// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const key = require('./config.js');
const auth = require('./auth.js');

Router.route('/signup').post(async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: 'Username already exists.' });
    }

    // // Hash the password
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);

    // Create and save the new user
    // const newUser = new User({ username, password: hashedPassword });
    const newUser = new User({ username, password });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error.' });
  }
});

Router.route('/login').post(async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Compare the password
    // const isMatch = await bcrypt.compare(password, user.password);
    // if (!isMatch) {
    //   return res.status(401).json({ message: 'Invalid credentials.' });
    // }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, key.SECRET_KEY, { expiresIn: '1h' });

    // Set the token in a cookie
    // res.cookie('jwt', token, { httpOnly: true, maxAge: 3600000 }); // Cookie expires in 1 hour

    res.status(200).json({ token:token,message: 'Login successful.' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error.' });
  }
});

Router.route('/userfind').get(auth, async (req, res) => {
  const userId = req.user.id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error.' });
  }
});

module.exports = Router;

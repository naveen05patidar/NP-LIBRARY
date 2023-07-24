// auth.js
const jwt = require('jsonwebtoken');
const key = require('./config.js');

const auth = async (req, res, next) => {
  try {
    const bearerHeader = req.headers['authorization'];
    console.log(bearerHeader);
    if (bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(" ");
      console.log(bearer);
      const token = bearer[1];
      console.log(token);
      await jwt.verify(token, key.SECRET_KEY, ((err, authData) => {
        if (err) {
          return console.log(err);
        } else {
          console.log(authData);
          req.user = authData;
          next();
        }
      }));
    }
    else {
      return res.status(401).json({ message: 'Unauthorized: No token provided.' });
    }
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized: Invalid token.' });
  }
};

module.exports = auth;

const express = require('express');
const Router = express.Router();
const sendMail = require('./sendMail.js');

Router.route('/mail').post(sendMail,async (req,res)=>{
console.log('email sended');
})

module.exports = Router;


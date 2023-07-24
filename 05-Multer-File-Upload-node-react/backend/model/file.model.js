const mongoose = require('mongoose');

let data = new mongoose.Schema({
    docType:String,
    name:String,
    file:String,
    exDate:String
})

const File = mongoose.model('data',data);

module.exports = File;
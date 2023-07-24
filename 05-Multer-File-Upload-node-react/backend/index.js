const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const multer = require('multer');
const PORT = 5000;
const cors = require('cors');
const now = new Date();
const path = require('path');
const Router = require('./route/file.route')

const File = require('./model/file.model.js');

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/test", { useNewUrlParser: true }).then(() => {
    console.log(`database is connected on mongodb://127.0.0.1:27017/test `);
})
.catch((err)=>{
    console.log(err);
})

app.post('/pan', upload.single('file'), (req, res) => {
    const {docType, name, exDate } = req.body;
    const file = req.file.filename;
  
    const pan = new File({ docType, name, file, exDate });
    pan.save()
      .then(() => res.status(201).json({ message: 'PAN data uploaded successfully' }))
      .catch(err => res.status(500).json({ error: err.message }));
  });
    


app.use('/Route',Router);




app.listen(PORT, ()=>{
    console.log(`Server Started on Port no. ${PORT}`);
})

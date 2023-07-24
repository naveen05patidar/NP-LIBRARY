const express = require('express');
const Router = express.Router();
const File = require('../model/file.model.js');

Router.route('/find').get(async(req,res)=>{
    await File.find().then((user)=>{
        res.status(200).json({success:true,user});
    }).catch((err)=>{
        res.status(500).send('internal Server Error')
    });
})

Router.route('/update/:id').put(async(req,res)=>{
    const id = req.params.id;

    console.log(id);
    const data = req.body;

    await File.findByIdAndUpdate({_id:id,data})
   
    .then((user)=>{
        res.status(200).json({success:true,user});
    }).catch((err)=>{
        res.status(500).send('internal Server Error')
    });
})

Router.route('/delete/:id').delete(async(req,res)=>{
    const id = req.params.id;
    console.log(id);
    await File.findByIdAndDelete({_id:id}).then((user)=>{
        res.status(200).json({success:true,user});
    }).catch((err)=>{
        res.status(500).send('internal Server Error')
    });
})


module.exports = Router;
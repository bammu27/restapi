const express =require("express");
const router = express.Router();
const Post =require('../models/Post');
const path = require('path');
const { read } = require("fs");
const app = express();

//path of signup page
formapath = path.resolve(__dirname,'../index.html')

router.get('/',(req,res)=>{

    res.send("we are on posts");
})

router.get('/Details',(req,res)=>{

    res.sendFile(formapath);
})


router.post('/form', async(req, res) => {
   console.log(`name:${req.body.name} email:${req.body.email} phonenumber:${req.body.number}`);
    const post =new Post({
        name:req.body.name,
        email:req.body.email,
        phonenumber:req.body.number
    });
   try{
    const savedpost = await post.save();
    res.json(savedpost);
   }catch(err){
       res.json({message:err});
   }
  }
  );


router.get('/:name',async(req,res)=>{
    console.log(req.params.name)

    try{
        const posts = await Post.find({name:req.params.name});
        res.json(posts);


    }catch(err){
        res.json({message:err});
    }


})


module.exports =router;
const express = require('express');
const bodyParser = require('body-parser');
const  app = express();
const Post =require('./models/Post')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose =require("mongoose");
require('dotenv/config')


//Import Routes

const postroutes =require('./routes/posts');

//connect mongodb
mongoose.connect(process.env.MONGO_URL).catch(err=>console.log(err));

//Routes
app.get("/",(req,res)=>{
  res.send("we are on host")
})

app.use('/post',postroutes);//middleware














app.listen(3000,()=>{
    console.log("Server is connected to port 3000");
})
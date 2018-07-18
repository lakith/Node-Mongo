const express = require('express');
const bodyParser = require('body-parser')

let {mongoose} = require("./db/mongooseConfig");
let {Todo} = require('./models/todo');
let {User} = require('./models/user');


let app = express();

app.use(bodyParser.json());

app.post('/users',(req,res)=>{
    
   let user1 = new User({
       name:req.body.name,
       username:req.body.username,
       age:req.body.age,
       email:req.body.email,
       password:req.body.password
   });

   user1.save().then((docs)=>{
       res.send(docs);
   },(err)=>{
       res.status(400).send(err);
   });
});

app.listen(3000,()=>{
  console.log('server is running');
});
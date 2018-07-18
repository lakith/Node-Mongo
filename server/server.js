const express = require('express');
const bodyParser = require('body-parser')

let {mongoose} = require("./db/mongooseConfig");
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  var newTodo = new Todo ({
    text:req.body.text
  });
  newTodo.save().then((doc)=>{
    res.send(doc);
  },(err)=>{
    res.status(400).send(e);
  });
});

app.listen(3000,()=>{
  console.log('server is running');
});
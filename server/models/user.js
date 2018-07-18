let mongoose = require('mongoose');

let User = mongoose.model('Employee',{
    name:{
        type:String,
        require:true,
        minleangth:1,
        trim:true
    },
    email:{
        type:String,
        minleangth:5,
        require:true
    },
    username:{
        type:String,
        require:true,
        minleangth:5
    },
    password:{
        type:String,
        require:true,
        minleangth:5
    },
    age:{
        type:Number,
        require:true
    }

});

module.exports={User};
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client)=>{
    if(err){
        console.log('close the conection');
    } else {
        console.log('Connection Successfull');
        const db = client.db('TodoApp');
        db.collection('Users').countDocuments().then((count)=>{
            console.log('TodoAPP Data');
            console.log(count);
        },(err)=>{
            console.log('unable to fatch TodoApp');
        });

        db.collection('Users').find({name:'Hansi Yapa'}).toArray().then((docs)=>{
            console.log('Connection Fatching Successfull');
            console.log(JSON.stringify(docs,undefined,2));
        },(err)=>{
            console.log('Unable to fatch data');
        });
    }
    
});
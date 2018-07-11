//const MongoDbClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client)=>{
    if(err){
        return console.log("Error with connecting the server");
    } else {
        console.log('Connection Successfull');
        const db = client.db('TodoApp');

        // db.collection('ToDos').insertOne({
        //     text:'This is the body fo the collection',
        //     completed:false
        // },(err,result)=>{
        //     if(err){
        //         return console.log('unable to insert todo',err);
        //     }
        //     console.log(JSON.stringify(result.ops,undefined,2));
        // })

        db.collection('Users').insertOne({
            name:'Senila Muthugala',
            age:22,
            location:'Horana'
        },(err,result)=>{
            if(err){
                return console.log('Collection insertion failed');
            } else {
                console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
            }
        })
    }
    client.close();
});
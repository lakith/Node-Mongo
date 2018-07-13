const {MongoClient,ObjectID} = require('mongodb');

// MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true},(err,client)=>{

// if(err){
//     console.log('Connection Unsuccessfull');
// } else{
//     console.log('Connection Successfull');
//     const db = client.db('TodoApp');
//     db.collection('Users').deleteMany({name:'Senila Muthugala'}).then((deleteResult)=>{
//         console.log(deleteResult);
//     },(err)=>{
//         console.log('Unable to delete data');
//     });
// }

// });

// MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true},(err,client)=>{
//     if(err){
//         console.log('connection failed');
//     }else{
//         console.log('Connection successfull');
//         const db = client.db('TodoApp');
//         db.collection('Users').findOneAndDelete({name:'Lakith Muthugala'}).then((deleteResult)=>{
//             console.log(deleteResult);
//         })
//     }
// });5b423888c7943d245067d8a4

// MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true},(err,client)=>{
//     if(err){
//         console.log('Connection failed');
//     } else{
//         console.log('Connection Successfull');
//         const db = client.db('TodoApp');
//         db.collection('Users').findOneAndDelete({
//             _id:new ObjectID("5b423888c7943d245067d8a4"}).then((result) => {
//             console.log(result);
//         }).catch((err) => {
//             console.log('Deletion failed');
//         }))
//     }
// });

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true},(err,client)=>{
    if(err){
        console.log('Connection failed');
    } else {
        console.log('Connection Successfull');
        const db = client.db('TodoApp');
        db.collection('Users').findOneAndDelete({_id:new ObjectID('5b4822f77cce3015f020b29f')}).then((result)=>{
            console.log(result);
        }).catch((err)=>{
            console.log('Deletion failed');
        })
    }
})
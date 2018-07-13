const { MongoClient, ObjectID } = require("mongodb");

// MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true},(err,client=>{
//     if(err)
//     {
//         console.log('Connection Falied');
//     } else {
//         console.log('Connection Successfull');
//         const db = client.db('Users');
//         db.collection('Users').findOneAndUpdate({_id: new ObjectID('5b482309fbb9c421b41f41bc')},{
//             $set:{name : 'Hansi Yapa'}
//         },{
//             returnOriginal:false
//         }).then((result)=>{
//             console.log(result);
//         })
//     }
// },(err)=>{
//     console.log('Error Updation')
// })
// );

// MongoClient.connect(
//   "mongodb://localhost:27017/TodoApp",
//   { useNewUrlParser: true },
//   (err, client) => {
//     if (err) {
//       console.log("Error In Connection");
//     } else {
//       console.log("Connection Successfull");
//       const db = client.db("TodosApp");
//       db.collection("Users")
//         .findOneAndUpdate(
//           { _id: new ObjectID("5b482309fbb9c421b41f41bc") },
//           { set: { name: "Hansi Yapa" } },
//           { returnOriginal: false }
//         )
//         .then(result => {
//           console.log(result);
//         });
//     }
//   }
// );

// MongoClient.connect(
//   "mongodb://localhost:27017/TodoApp",
//   { useNewUrlParser: true },
//   (err, client) => {
//     if (err) {
//       console.log("Connection failed");
//     } else {
//       console.log("Connection Successfull");
//       const db = client.db("TodosApp");
//       db.collection("Users")
//         .findOneAndUpdate(
//           { _id: new ObjectID("5b482309fbb9c421b41f41bc") },
//           { set: { enable: true } },
//           { returnObject: false }
//         )
//         .then(result => {
//           console.log(result);
//         })
//         .catch(err => {
//           console.log(err);
//         });
//     }
//   }
// );

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true},(err,client)=>{
    if(err){
        console.log('Connection failed');
    } else {
        console.log('Connection Successfull');
        const db = client.db('TodoApp');
        db.collection('Users').findOneAndUpdate({_id:new ObjectID('5b482309fbb9c421b41f41bc')},{$set:{location:'Horana'}},{returnOriginal:false}).then((result)=>{
            console.log(result);
        }).catch((err)=>{
            console.log('Deletion failed');
        })
    }
})

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true},(err,client)=>{
    if(err){
        console.log('Connection failed');
    } else {
        console.log('Connection Successfull');
        const db = client.db('TodoApp');
        db.collection('Users').findOneAndUpdate({_id:new ObjectID('5b482309fbb9c421b41f41bc')},{$inc:{age:23}},{returnOriginal:false}).then((result)=>{
            console.log(result);
        }).catch((err)=>{
            console.log('Deletion failed');
        })
    }
})
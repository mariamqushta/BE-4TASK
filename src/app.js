const { error } = require("console")
const mongodb=require("mongodb")
const mongoclient=mongodb.MongoClient
const connectionUrl='mongodb://127.0.0.1:27017'
const dbname="proj-1" 

mongoclient.connect(connectionUrl,(error,res1)=>{
    if(error){
        return console.log("error has occured")
    }
    console.log("all perf")
    const db=res1.db(dbname)
    db.collection('users').insertOne({name:"mariam",age:26},(error,data)=>{
        if(error){
            console.log('unable to insert data')
        }console.log(data.insertedId)
    })
    db.collection('users').insertOne({name:"menna",age:27},(error,data)=>{
        if(error){
            console.log('unable to insert data')
        }console.log(data.insertedId)
    })
    db.collection('users').insertMany([{
        name:"islam",age:27
    },{
        name:"adel",age:27
    },{
        name:"reem",age:27
    },{
        name:"ali",age:27
    },{
        name:"sara",age:27
    },{
        name:"maiy",age:33
    },{
        name:"ayman",age:5
    },{
        name:"fatma",age:43
    },{
        name:"rone",age:24
    },{
        name:"salma",age:12
    }


],(error,data)=>{
    if(error){
        console.log('unable to insert data')
    } console.log(data.insertedCount)
})

db.collection('users').findOne({_id:mongodb.ObjectId("66b1339aa32c525795cbcd02")},(error,data)=>{
    if(error){
        console.log('unable to insert data')
    }
})

db.collection('users').find({age:27}).limit(3).toArray((error,user)=>{
    if(error){
        console.log('unable to insert data')
    }console.log(user)
})

db.collection('users').find({age:27}).limit(4).count((error,user)=>{
    if(error){
        console.log('unable to insert data')
    }console.log(user)
})


db.collection('users').updateOne({_id:mongodb.ObjectId("66b1339aa32c525795cbccfb")},
{$set:{name:"nora"},
$inc:{age:4}}).then((data)=>console.log(data.modifiedCount)).
catch((error)=>console.error(error))



db.collection('users').updateOne({_id:mongodb.ObjectId("66b1339aa32c525795cbccfc")},
{$set:{name:"nada"},
$inc:{age:4}}).then((data)=>console.log(data.modifiedCount)).
catch((error)=>console.error(error))

db.collection('users').updateOne({_id:mongodb.ObjectId("66b1339aa32c525795cbccfd")},
{$set:{name:"salm"},
$inc:{age:4}}).then((data)=>console.log(data.modifiedCount)).
catch((error)=>console.error(error))

db.collection('users').updateOne({_id:mongodb.ObjectId("66b1339aa32c525795cbccfe")},
{$set:{name:"ahmad"},
$inc:{age:4}}).then((data)=>console.log(data.modifiedCount)).
catch((error)=>console.error(error))


db.collection('users').updateMany({age:27},{
    $inc:{age:10}
}).then((data)=>console.log(data.modifiedCount)).
catch((error)=>console.error(error))


db.collection('users').deleteOne({_id:mongodb.ObjectId("66b1339aa32c525795cbccfa")})
.then((data)=>console.log(data.deletedCount)).
catch((error)=>console.error(error))


db.collection('users').deleteMany({age:41})
.then((data)=>console.log(data.deletedCount)).
catch((error)=>console.error(error))

})

   
// const mongodb = require('mongodb-legacy')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectId 

const {MongoClient, ObjectId} = require('mongodb-legacy')

const connectionURL = 'mongodb://localhost:27017'
const databaseName = 'task-manager'

// const id = new ObjectId()
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error,client) => {
    if(error) {
        return console.log('Unable to connect')
    }
    
    const db = client.db(databaseName)


    // db.collection('tasks').deleteOne({
    //     description: 'Clean the house'
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({
    //     age: 24
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectId('640ef0924488714e6c592470')
    // }, {
    //     // $set: {
    //     //     name: 'Raj18'
    //     // }
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').findOne({name:'Raj'},(error,user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({age:24}).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({age:24}).count((error, count) => {
    //     console.log(count)
    // })

    // db.collection('users').insertOne({
    //     _id: id,
    //     name:'Abhi',
    //     age:18
    // }).then(console.log)

    // db.collection('users').insertOne({
    //     name: "ABCD",
    //     age: 24
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.insertedId)
    // })
    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     },
    //     {
    //         name: 'Abbbbb',
    //         age: 23
    //     }
    // ], (error,reslt) => {
    //     if(error){
    //         return console.log('Unable to insert docs')
    //     }
    //     console.log(reslt.insertedIds)
    // })

//         db.collection('tasks').insertMany([{
//         name:'Andrew',
//         age:29
//     },
// {
//     name: 'aaaaa',
//     age:11
// }]).then(console.log)

//insert docs in new collection
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },
    //     {
    //         description: 'Renew Inspection',
    //         completed: false 
    //     },
    //     {
    //         description: 'Hi',
    //         completed: false
    //     }
    // ]).then(console.log)

})



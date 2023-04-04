const express = require('express')
require('./db/mongoose')
const userRouter = require('./router/user')
const taskRouter = require('./router/task')


const app = express()
const port = process.env.PORT





app.use(express.json())
app.use(userRouter) 
app.use(taskRouter)



app.listen(port, () => {
    console.log('Server is up on port' + port)
})

// for uploading images and files
// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000 
//     },
//     fileFilter(req,file,cb) {
//         //if(!file.originalname.endsWith('.pdf')) 
        
//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('Please upload a word doc'))
//         }
//         cb(undefined, true)

//         // cb(new Error('File must be a pdf'))
//         // cb(undefined, true)
//         // cb(undefined, false)
//     }
// })

// // for checking error handling
// // const errorMiddleware = (req,res,next) => {
// //     throw new Error('From my middleware')
// // }

// app.post('/upload',upload.single('upload'), (req,res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({error: error.message})
// })

//app.post('/upload', upload.single('upload'), (req,res) => {
//   res.send()
//})



//const bcrypt = require('bcryptjs')

//middleware
// app.use((req,res,next) => {
//     if(req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

//maintainance middleware
// app.use((req,res,next) => {
//     res.status(503).send('Site is currentyl down. Check back soon!')
// })



// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('64242a807723606134dd4268')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)
//     // const user = await User.findById('641c4c3f3ad0ef4090e3ed19')
//     // await user.populate('tasks').execPopulate()
//     // console.log(user.tasks)

// }

// main()

// bcrypt password encryption
//const bcrypt = require('bcryptjs')

// const jwt = require('jsonwebtoken')

// const myFun = async () => {

//     const token = jwt.sign({_id: 'abc133'}, 'newfunctionality', {expiresIn: '7 days'})
//     console.log(token)

//     const data = jwt.verify(token, 'newfunctionality')
//     console.log(data)
//    const password = 'Red@1234'
//    const hashedPassword = await bcrypt.hash(password, 8)

//    console.log(password)
//    console.log(hashedPassword)

//    const isMatch = await bcrypt.compare('Red@1234', hashedPassword)
//    console.log(isMatch)
// }

// myFun() 

// const router = new express.Router()
// router.get('/test', (req,res) => {
//     res.send('This is another router')
// })
// app.use(router)



// //create
// app.post('/users',async (req,res) => {
//     const user = new User(req.body)

//     try {
//         await user.save()
//         res.status(201).send(user)
//     } catch(e) {
//         res.status(400).send(e)
//     }


//     // user.save().then(() => {
//     //     res.status(201).send(user)
//     // }).catch((e) => {
//     //     res.status(400).send(e)
//     // })
//     // console.log(req.body)
//     // res.send('testing')
// })

// //read
// app.get('/users', async (req,res) => {
//     try {
//         const users = await User.find({})
//         res.send(users)
//     } catch(e) {
//         res.status(500).send()
//     }

// //without async-await
//     // User.find({}).then((users) => {
//     //     res.send(users)
//     // }).catch((e) => {
//     //     res.status(500).send()
//     // })
// })

// app.get('/users/:id', async (req,res) => {
//     const _id = req.params.id

//     try {
//         const user = await User.findById(_id)
//         if(!user) {
//             return res.status(404).send()
//         }
//         res.send(user)
//     } catch(e) {
//         res.status(500).send()
//     }
// // without async-await
//     // const _id = req.params.id
//     // User.findById(_id).then((user) => {
//     // if(!user) {
//     //     return res.status(404).send()
//     // }

// //     res.send(user)
// //     }).catch((e) => {
// //         res.status(404).send()
// //     })
// //     // console.log(req.params)
//  })

//  app.patch('/users/:id', async (req,res) => {
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['name', 'email', 'password', 'age']
//     const isValid = updates.every((update) => allowedUpdates.includes(update))

//     if(!isValid) {
//         return res.status(400).send({error : "Invalid updates"})
//     }

//     try {
//         const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
//         if(!user) {
//             return res.status(404).send()
//         }

//         res.send(user)
//     }catch(e) {
//         res.status(400).send(e)
//     }
//  })

//  app.delete('/users/:id', async (req,res) => {
//     try {
//         const user = await User.findByIdAndDelete(req.params.id)

//         if(!user) {
//             return res.status(404).send()
//         }

//         res.send(user)
//     }catch(e) {
//         res.status(500).send()
//     }
//  })





// //create tasks
// app.post('/tasks', async (req,res) => {
//     const task = new Task(req.body)

//     try {
//         await task.save()
//         res.status(201).send(task)
//     } catch(e) {
//         res.status(400).send(e)
//     }

// // without async-await    
//     // task.save().then((task) => {
//     //     res.status(201).send(task)
//     // }).catch((e) => {
//     //     res.status(400).send(e)
//     // })
// })

// //read
// app.get('/tasks', async (req,res) => {

//     try {
//         const tasks = await Task.find({})
//         res.send(tasks)   
//     } catch(e) {
//         res.status(500).send()
//     }
   
//     // Task.find({}).then((tasks) => {
//     //     res.send(tasks)
//     // }).catch((e) => {
//     //     res.status(500).send()
//     // })
// })

// app.get('/tasks/:id', async (req,res) => {
//     const _id = req.params.id

//     try {
//         const task = await Task.findById(_id)
//         if (!task) {
//             return res.status(404).send()
//         }
//         res.send(task)
//     } catch(e) {
//         res.status(500).send()
//     }
//     // Task.findById(_id).then((task) => {
//     // if(!task) {
//     //     return res.status(404).send()
//     // }

//     // res.send(task)
//     // }).catch((e) => {
//     //     res.status(404).send()
//     // })
//     // console.log(req.params)
// })

// app.patch('/tasks/:id', async (req,res) => {
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['description', 'completed']
//     const isValid = updates.every((update) => allowedUpdates.includes(update))

//     if(!isValid) {
//         return res.status(400).send({error: "Invalid Updates"})
//     }

//     try {
//         const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
//         if(!task){
//             return res.status(404).send()
//         }

//         res.send(task)
//     } catch(e) {
//         res.status(400).send(e)
//     }
// })


// app.delete('/tasks/:id', async (req,res) => {
//     try {
//         const task = await Task.findByIdAndDelete(req.params.id)

//         if(!task) {
//             return res.status(404).send()
//         }

//         res.send(task)
//     }catch(e) {
//         res.status(500).send()
//     }
//  })

// app.listen(port, () => {
//     console.log('Server is up on port' + port)
// })
require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete("6411a95a07d1280d80061cd8").then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('6412d508df695e484cda2d77').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
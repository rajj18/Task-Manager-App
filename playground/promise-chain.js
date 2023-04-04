require('../src/db/mongoose')
const User = require('../src/models/user')

//6412d54b04d7721c4cf445c9

// User.findByIdAndUpdate("6411aecb63f1b231f458b15f", {age:1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age:1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id,age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('6411acf620900418e81f11c4',2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})




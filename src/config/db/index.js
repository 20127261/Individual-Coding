const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://your_ECare_DB:your_ECare_DB@cluster0.uxycugu.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Connect successfully !!!")
    } catch (error) {
        console.log("Connect failure !!!")
    }
}

module.exports = { connect }
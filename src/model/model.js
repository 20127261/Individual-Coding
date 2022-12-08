const mongoose = require('mongoose')

const signinSchemma = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})


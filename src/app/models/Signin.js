const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Signin = new Schema({
    username: {type: String},
    password: {type: String},

    signinAt: {type: Date, default: Date.now},
    singoutAt: {type: Date, default: Date.now},
    action: {type: String, default: 'System'},

}, { collection: 'signin'})

const SigninModel = mongoose.model('signin', Signin)

module.exports = SigninModel
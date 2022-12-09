const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Signup = new Schema({
    mail: {type: String},
    name: {type: String},
    username: {type: String},
    password: {type: String},

}, { collection: 'signup'})

const SignupModel = mongoose.model('signup', Signup)

module.exports = SignupModel
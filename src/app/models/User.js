const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Users = new Schema({
    mail: {type: String},
    name: {type: String},
    username: {type: String},
    password: {type: String},

}, { collection: 'users'})

Users.index({ username: 1})

module.exports = mongoose.model('users', Users)
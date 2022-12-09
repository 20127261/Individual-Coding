const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Users = new Schema({
    username: {type: String},
    name: {type: String},
    mail: {type: String},

}, { collection: 'users'})

Users.index({ username: 1})

const UsersModel = mongoose.model('users', Users)

module.exports = UsersModel
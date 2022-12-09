const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema({
    user_id: {type: String},
    rate: {type: Number},
    cmt: {type: String},
    id: {type: Number},
    rateAt: {type: Date, default: Date.now},

}, { collection: 'comments'})

const CommentsModel = mongoose.model('comments', Comment)

module.exports = CommentsModel
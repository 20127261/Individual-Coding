const express = require('express')
const router = express.Router()

const commentController = require('../app/controllers/CommentController')

router.use('/', commentController.comment)

module.exports = router
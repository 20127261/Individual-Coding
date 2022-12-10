const express = require('express')
const router = express.Router()

const userController = require('../app/controllers/UserController')
const { route } = require('./site')

router.use('/:id', userController.get_userID_page)
router.use('/', userController.get_all_user)

module.exports = router
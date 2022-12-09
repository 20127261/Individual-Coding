const express = require('express')
const router = express.Router()

const signupController = require('../app/controllers/SignupController')

router.use('/:slug', signupController.show)
router.use('/', signupController.signup)

module.exports = router
const express = require('express')
const router = express.Router()

const signinController = require('../app/controllers/SigninController')

router.use('/:slug', signinController.show)
router.use('/', signinController.signin)

module.exports = router
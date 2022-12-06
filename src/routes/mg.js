const express = require('express')
const router = express.Router()

const mgController = require('../app/controllers/MgController')

router.use('/:slug', mgController.show) 
router.use('/', mgController.index)

module.exports = router


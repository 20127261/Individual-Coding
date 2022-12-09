const express = require('express')
const morgan = require('morgan')
const hbs = require('express-handlebars')
const path = require('path')
const mongo = require('mongodb')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const app = express()
const port = 3000

const route = require('./routes')
const db = require('./config/db')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(bodyParser.json({limit:"50mb"}))
app.use(cors())
app.use(morgan("common"))

//template engine setup
app.engine('hbs', hbs.engine({
  extname: '.hbs',
  partialsDir: (__dirname + '/resources/views/partials')
}))

app.set('view engine', 'hbs')
app.set('views', './src/resources/views')

// CONNECT DATABASE
db.connect()

// Routes init
route(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


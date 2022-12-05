const express = require('express')
const morgan = require('morgan')
const hbs = require('express-handlebars')
const path = require('path')
const exp = require('constants')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

//Http logger middleware
// app.use(morgan('combined'))

//template engine setup
app.engine('hbs', hbs.engine({
  extname: '.hbs',
  partialsDir: (__dirname + '/resources/views/partials')
}))


app.set('view engine', 'hbs')
app.set('views', './src/resources/views')

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.get('/news/abcd', (req, res) => {
  res.render('abcd')
})

app.get('/search', (req, res) => {
  res.render('search')
})

app.post('/search', (req, res) => {
  console.log(req.body)
  res.send('')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

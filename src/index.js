const express = require('express')
const morgan = require('morgan')
const hbs = require('express-handlebars')

const app = express()
const port = 3000

//Http logger middleware
app.use(morgan('combined'))

//template engine setup
app.engine('hbs', hbs.engine({
  extname: '.hbs'
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


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

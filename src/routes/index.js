const newsRouter = require('./news')

function route(app) {
    app.get('/', (req, res) => {
        res.render('home')
    })
    
    // app.get('/news', (req, res) => {
    //   res.render('news')
    // })

    app.use('/news', newsRouter)
    
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
}

module.exports = route;
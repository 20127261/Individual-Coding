const mgRouter = require('./mg')
const siteRouter = require('./site')
function route(app) {
   

    app.use('/mg', mgRouter)

    app.use('/', siteRouter)
    
}

module.exports = route;
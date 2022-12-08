const signinRouter = require('./signin')
const siteRouter = require('./site')
function route(app) {
   

    app.use('/signin', signinRouter)

    app.use('/', siteRouter)
    
}

module.exports = route;
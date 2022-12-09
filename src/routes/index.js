const signupRouter = require('./signup')
const signinRouter = require('./signin')
const commentRouter = require('./comment')
const userRouter = require('./user')
const siteRouter = require('./site')

function route(app) {
    app.use('/user', userRouter)

    app.use('/comment', commentRouter)

    app.use('/signup', signupRouter)

    app.use('/signin', signinRouter)

    app.use('/', siteRouter)
    
}

module.exports = route;
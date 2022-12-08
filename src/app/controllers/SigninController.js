class SigninController {

    // [GET] /signin
    index(req, res) {
        res.render('signin')
    }
    
    show(req, res) {
        res.send("SIGN IN 123")
    }
}

module.exports = new SigninController
const SignniModel = require('../models/Signin')

class SigninController {

    // [POST] /signin
    signin(req, res, next) {
        var username = req.body.username
        var password = req.body.password

        SignniModel.create({
            username: username,
            password: password,
        })
        .then(data=>{
            res.json('Signin successfully !!!')
        })
        .catch(err=>{
            res.status(500).json('Signin failure !!! ')
        })

        console.log(username, password)
    }
    
    show(req, res) {
        res.send("SIGN IN !!!")
    }
}

module.exports = new SigninController
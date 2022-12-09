const SignupModel = require('../models/Signup')

class SignupController {

    // [POST] /signup
    signup(req, res, next) {
        var mail = req.body.mail
        var name = req.body.name
        var username = req.body.username
        var password = req.body.password

        SignupModel.create({
            mail: mail,
            name: name,
            username: username,
            password: password
        })
        .then(data=>{
            res.json('Create successfully !!!')
        })
        .catch(err=>{
            res.status(500).json('Create failure !!! ')
        })

        console.log(mail, name, username, password)
    }
    
    show(req, res) {
        res.send("SUCCESS !!!")
    }
}

module.exports = new SignupController
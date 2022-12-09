const { restart } = require('nodemon')
const SigninModel = require('../models/Signin')
const UserModel = require('../models/User')

class UserController {

    // [GET] /user/:id
    get_user_page(req, res) {
        
        SigninModel.find({}, function (err, signin) {
            if (!err) {
                res.json(signin)
                return
            }

            res.status(400).json({ error: 'Invalid profile !!! '})
        })
    }
    
    

}

module.exports = new UserController
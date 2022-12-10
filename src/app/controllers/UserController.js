const { restart } = require('nodemon')
const SigninModel = require('../models/Signin')

class UserController {

    // [GET] /user/:id
    get_all_user(req, res) {

        SigninModel.find({}, function (err, signin) {
            if (!err) {

                res.json(signin)
                return
            }

            res.status(400).json({ error: 'Invalid profile !!! '})
        })

    }
    
    get_userID_page(req, res) {

        SigninModel.findOne({id: req.params.id}, function(err, signin) {
            if (!err) {
                console.log(req.params.id)
                res.json(signin)
                return
            }
            res.status(500).json({ error: 'Invalid profile !!! '})
        })
    }
    

}

module.exports = new UserController
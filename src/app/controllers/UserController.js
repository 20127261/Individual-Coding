const { restart } = require('nodemon')
const SigninModel = require('../models/Signin')

class UserController {

    // [GET] /user/:id
    get_user_ID_page(req, res) {
        
        SigninModel.find(req.body.username, function (err, signin) {
            if (!err) {
                res.json(signin)
                console.log(req.body.username)
                return
            }
            
            res.status(400).json({ error: 'Invalid profile !!! '})
        })

        // SigninModel.findById(req.body.id, function (err, signin) {
        //     if (!err) {

        //         res.json(signin)
        //         return
        //     }

        //     res.status(400).json({ error: 'Invalid profile !!! '})
        // })
    }
    
    

}

module.exports = new UserController
const CommentModel = require('../models/Comment')

class CommentController {

    // [POST] comment
    comment(req, res, next) {
        var user_id = req.body.user_id
        var rate = req.body.rate
        var cmt = req.body.cmt
        var id = req.body.id

        CommentModel.create({
            user_id: user_id,
            rate: rate,
            cmt: cmt,
            id: id
        })
        .then(data=>{
            res.json('Comment successfully !!!')
        })
        .catch(err=>{
            res.status(500).json('Comment failure !!! ')
        })

        console.log(user_id, rate, cmt, id)
    }

}

module.exports = new CommentController
class MgController {

    // [GET] mg
    index(req, res) {
        res.render('mg')
    }
    
    // [GET] /mg/:slug
    show(req, res) {
        res.send('MUSCLE GROUP DETAILS')
    }

}

module.exports = new MgController
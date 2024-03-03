class SiteController {

    // get news
    index(req, res) {
        res.render('home')
    }

    // get news/:noibat
    register(req, res){
        res.render('register')
    }
}
    
module.exports = new SiteController
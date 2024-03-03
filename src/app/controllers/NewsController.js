class NewsController {

    // get news
    index(req, res) {
        res.render('news')
    }

    // get news/:noibat
    show(req, res){
        res.render('noibat')
    }
}
    
module.exports = new NewsController
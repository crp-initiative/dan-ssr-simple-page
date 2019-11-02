class HomeController {
    index(req, resp) {
        return resp.render('home', {pageTitle: 'Home Page'});
    }
}

module.exports = new HomeController();

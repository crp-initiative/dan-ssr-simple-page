class HomeController {
  static index(req, resp) {
    return resp.render('home', { pageTitle: 'Home Page' });
  }
}

module.exports = HomeController;

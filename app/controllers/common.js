class CommonController {
  static notFound(req, resp) {
    return resp.render('not-found', { pageTitle: 'Oops - Not found' });
  }
}

module.exports = CommonController;
class CommonController {
  static notFound(req, resp) {
    return resp.status(404).render('not-found', { pageTitle: 'Oops - Not found' });
  }
}

module.exports = CommonController;

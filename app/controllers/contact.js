class ContactController {
  static index(req, resp) {
    return resp.render('contact', { pageTitle: 'Contact' });
  }
}

module.exports = ContactController;

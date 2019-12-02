class ContactController {
  static index(req, resp) {
    const data = { pageTitle: 'Contact' };
    if (req.method === 'POST') {
      data.message = 'Thank for your interest for our property. You will be shortly contacted by our Sales Department';
    }
    return resp.render('contact', data);
  }
}

module.exports = ContactController;

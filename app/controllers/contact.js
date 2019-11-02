class ContactController {
    index(req, resp) {
        return resp.render('contact',  {pageTitle: 'Contact'});
    }
}

module.exports = new ContactController();

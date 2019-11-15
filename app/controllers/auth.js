const UserModel = require('../models/user');

class AuthController {
  static login(req, resp) {
    let data = {};
    if (req.method === 'POST') {
      const user = UserModel.getUser();

      if (user.email.toLowerCase() === req.body.email.toLowerCase()) {
        if (user.password === req.body.password) {
          return resp.redirect('/admin');
        }

        data = { message: 'Incorrect username or password.' };
      }

      data = { message: 'Incorrect username or password.' };
    }
    return resp.render('login', data);
  }
}

module.exports = AuthController;

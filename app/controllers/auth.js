const db = require('../models');

/**
 *
 */
class AuthController {
  /**
   *
   * @param req
   * @param resp
   * @returns {void | undefined | *|Promise<T>}
   */
  static login(req, resp) {
    let data = {};
    if (req.method === 'POST') {
      return db.User.findOne({
        where: {
          email: req.body.email.toLowerCase()
        }
      }).then(user => {
        if (user) {
          data = { message: 'Password verification is not implemented...' };
        } else {
          data = { message: 'Incorrect username or password.' };
        }

        return resp.render('login', data);
      });
    }
    return resp.render('login');
  }
}

module.exports = AuthController;

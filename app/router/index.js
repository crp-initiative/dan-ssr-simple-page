const express = require('express');

const home = require('../controllers/home');
const contact = require('../controllers/contact');
const auth = require('../controllers/auth');
const common = require('../controllers/common');

const router = express.Router();

// home page route
router.get('/', home.index);

// contact page route
router.get('/contact', contact.index);
router.post('/contact', contact.index);

// login routes
router.get('/login', auth.login);
router.post('/login', auth.login);

// not found
router.use(common.notFound);

module.exports = router;

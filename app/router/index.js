const express = require('express');

const home = require('../controllers/home');
const contact = require('../controllers/contact');
const common = require('../controllers/common');

const router = express.Router();

// home page route
router.get('/', home.index);

// contact page route
router.get('/contact', contact.index);

// not found
router.use(common.notFound);

module.exports = router;

const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const webRouter = require('./router');

const app = express();

app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', '.hbs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(webRouter);

module.exports = app;

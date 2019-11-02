const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const webRouter = require('./router');

const app = express();

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', '.hbs');

app.use(webRouter);

module.exports = app;

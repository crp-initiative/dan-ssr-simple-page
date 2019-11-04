const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const webRouter = require('./router');

const app = express();

app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', '.hbs');

app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(webRouter);

module.exports = app;

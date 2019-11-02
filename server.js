const app = require('./app/app');

app.listen(3000, (err) => {
    if (err) {
        throw err;
    }

    console.info('Server is running at: http://localhost:3000/');
});

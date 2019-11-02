const express = require('express');
const console = require('console');

const app = express();

app.listen(3000, (err) => {
    if (err) {
        throw err;
    }

    console.info('Server is running at: http://localhost:3000/');
});

const express = require('express');
const path = require('path');
const serveStatic = require('serve-static')

const PORT = process.env.PORT || 8080;
const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
app.use('/', serveStatic(path.join(__dirname, '/dist')))

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});
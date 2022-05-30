const express = require('express')
const serveStatic = require('serve-static')

const path = require('path')
const app = express()

//serve static /dist
app.use('/', serveStatic(path.join(__dirname, '/dist')))

//to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {

res.sendFile(path.join(__dirname, '/dist/index.html'))
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
})
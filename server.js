const express = require('express')
const serveStatic = require('serve-static')

const path = require('path')
const app = express()

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()


server.use(middlewares)
server.use(router)
server.listen(process.env.PORT || 5000, () => {
    console.log('JSON Server is running')
})

//serve static /dist
app.use('/', serveStatic(path.join(__dirname, '/dist')))

//to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {

res.sendFile(path.join(__dirname, '/dist/index.html'))
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
})
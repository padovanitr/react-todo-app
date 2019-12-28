const port = 3003

const bodyParser = require('body-parser')
//that´s the server itself where node runs
const express = require('express')
const server = express()
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true}))
server.use(bodyParser.json())

server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server
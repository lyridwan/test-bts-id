const express = require('express')
const cors = require('cors')
const server = express()
const db = require('./src/Configs/db')
const routes = require('./src/main')
const bodyParser = require('body-parser')
const morgan = require('morgan')


server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: false}))
server.use(morgan("dev"))
server.use('/api' ,routes)
server.use(cors())


db.connect()
    .then(res => {
        console.log("Database Connected")
    })
    .catch(err => {
        console.log("Database not Connected")
        console.log(err)
    })

server.listen(3306, () => {
    console.log("Service running on port 3306")
})
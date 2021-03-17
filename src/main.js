const express = require('express')
const shopping = require('./Routes/shopping')
const routes = express.Router()
const user = require('./Routes/user')
const auth = require('./Routes/auth')

routes.use("/shopping", shopping)
routes.use("/user", user)
routes.use("/user/signin", auth)

routes.use("*", (req, res)=> {
    console.log("Check URL")
    res.send("DATA KOSONG")  
})

module.exports = routes
const response = require('../Helpers/response')
const jwt = require('jsonwebtoken')

const checkToken = (user) => {
    return function (req, res, next)  {
        const { authtoken } = req.headers
        let isAccess = false;

    if (!authtoken) {
        const result = {
            msg : "Login dulu"
        }
        console.log("Login dulu")
        return response(res, 209, result)
    }

    jwt.verify(authtoken, 'secret', (err, decode)=> {
        if(err) {
            console.log("Cek token nya")
            return response(res, 209, {msg : "Cek token nya!"})
        }
        user.map((username) => {
            console.log(decode.username)
            if(username == decode.username) {
                isAccess = true;
            }
        })
            if(isAccess) {
                next()
            } else {
                console.log("Maaf, kamu tidak mempunyai akses")
                return response(res, 209, {msg: "Maaf, kamu tidak mempunyai akses"})
            }
       })
    }
}

module.exports = checkToken
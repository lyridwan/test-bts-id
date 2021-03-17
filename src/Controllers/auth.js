const bcr = require('bcrypt')
const model = require('../Models/user')
const response = require('../Helpers/response');
const jwt = require('jsonwebtoken');

class Auth {
    setToken = async (email,username, role) => {
        try {

            const payload = {
                email: email,
                username : username,
            }

            const token = jwt.sign(payload, 'secret', { expiresIn : "3h" })

            const result = {
                msg : "Token dibuat",
                token : token,
                username: username,
            }
            console.log("Berhasil membuat token!")
            return result

        } catch (error) {
            throw error
        }
    }
    login = async (req, res) =>{
        try {
        const userDB = await model.getByUserName(req.body.username)
        const passUser = req.body.password
            
         if (userDB.length <= 0) {
            console.log("Username tidak terdaftar")
            return response(res, 200, {msg: "Username tidak terdaftar"})
        }
        
        const check = await bcr.compare(passUser, userDB[0].password)

        if (check) { 
            const result = await this.setToken(req.body.username, userDB[0].username)
            return response(res, 200, result)
        } 
            console.log("Cek password")
            return response(res, 200, {msg: "cek password"})

        } catch (error) {
            console.log(error)
            return response(res, 500, error)

        }
    }
}

module.exports = new Auth()

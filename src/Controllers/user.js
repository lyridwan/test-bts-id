const model = require('../Models/user');
const response = require('../Helpers/response');
const hashPassword = require('../Helpers/hash');

const user = {};

user.getAll = async (req, res) => {
    try{
        const result = await model.getAll();
        console.log("Get all Users Success")
        return response(res, 200, result);
    } catch (error){
        console.log("error")
        return response(res, 500, error);

    };
  
};

user.add = async (req, res) => {
    try {
        const checkUser = await model.getByUserName(req.body.username)
        const checkEmail = await model.getByEmail(req.body.email)

        if(checkUser.length > 0) {
            console.log("Username sudah terdaftar")
            return response(res, 209, {msg: "username sudah terdaftar"})
        }

        if(checkEmail.length > 0) {
            console.log("Email has been registered")
            return response(res, 209, {msg: "email has been registered"})
        }


        const newPassword = await hashPassword(req.body.password)
        const user = {
            username: req.body.username,
            password: newPassword,
            email: req.body.email,
            phone: req.body.phone,
            country: req.body.country,
            city: req.body.city,
            postcode: req.body.postcode,
            name: req.body.name,
            address: req.body.address
        }

        const data = await model.add(user);

        return response(res, 201, data);
    } catch (error){
        console.log(error)
        return response(res, 500, error);
    };

};

user.update = async (req, res) => {
    try {
        const newPassword = await hashPassword(req.body.password)
        const user = {
            id: req.body.id,
            username: req.body.username,
            password: newPassword,
            email: req.body.email,
            phone: req.body.phone,
            country: req.body.country,
            city: req.body.city,
            postcode: req.body.postcode,
            name: req.body.name,
            address: req.body.address
            
            
        }

        const data = await model.update(user);
        console.log("Sukses update data!")
        return response(res, 200, data);
    } catch (error){
        console.log("Update data gagal, periksa kembali data nya!")
        return response(res, 500, error);
    };
};

user.del = async (req, res) => {
    try {
        const result = await model.del(req.params.id);
        console.log("Sukses delete user dengan Id!")
         return response(res, 200, result);
    } catch (error) {
        console.log("Gagal delete user dengan Id, periksa kembali data nya!")
         return response(res, 400, error);
    };
 };

module.exports = user;

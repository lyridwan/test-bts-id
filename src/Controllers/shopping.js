const model = require('../Models/shopping')
const response = require('../Helpers/response')
const shopping = {}

shopping.getAll = async (req, res) => {
    try {
      const result = await model.getAll();
      return response(res, 200, result);
    } catch (error) {
      return response(res, 500, error);
    };
  };


shopping.add = async (req, res) => {
    try {
      const result = await model.add(req.body);
      return response(res, 201, result)
    } catch (error){
      return response(res, 400, error);
    };
    
};

shopping.update = async (req, res) => {
    try {
      const result = await model.update(req.body)
      return response(res, 200, result)
    } catch (error){
        return response(res, 400, error);
    };
};


shopping.get = async (req, res) => {
    try {
        const result = await model.get(req.params.id);
         return response(res, 200, result);
    }catch (error) {
         return response(res, 400, error);
    };
 };

shopping.del = async (req, res) => {
   try {
       const result = await model.del(req.params.id);
       console.log("Delete by id Success")
        return response(res, 200, result);
   }catch (error) {
        console.log("Delete by id Failed")
        return response(res, 400, error);
   };
};


 
module.exports = shopping;
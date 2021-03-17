const express = require("express");
const routes = express.Router();
const ctrl = require("../Controllers/user");

routes.get('/', ctrl.getAll);
routes.post("/signup", ctrl.add);
routes.put("/", ctrl.update);
routes.delete("/:id", ctrl.del);

module.exports = routes
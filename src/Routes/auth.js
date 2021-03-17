const express = require("express");
const routes = express.Router();
const ctrl = require("../Controllers/auth");

routes.post("/user/signin", ctrl.login)

module.exports = routes;
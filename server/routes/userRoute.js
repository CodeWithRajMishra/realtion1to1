const express = require("express");
const route = express.Router();
const userController= require("../controllers/userConroller");

route.post("/save", userController.dataSave );
route.get("/display", userController.dataDisplay);

module.exports = route;

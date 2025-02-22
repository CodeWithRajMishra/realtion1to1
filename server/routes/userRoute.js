const express = require("express");
const route = express.Router();
const userController= require("../controllers/userConroller");

route.post("/authorsave", userController.dataSave );
route.get("/showauthor", userController.showAuthordata);
route.post("/addnewbook", userController.addnewBook);
route.get("/displayalldata", userController.displayAllData);

module.exports = route;

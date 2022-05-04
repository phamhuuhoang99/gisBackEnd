const Route = require("express").Router();
const provinceController = require("../controllers/province.controller");

Route.get("/all", provinceController.getAll);
Route.get("/:gid/poi-in-pol", provinceController.getPointInProvince);

module.exports = Route;

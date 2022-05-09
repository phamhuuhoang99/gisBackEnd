const Route = require("express").Router();
const districtController = require("../controllers/district.controller");

Route.get("/:objectid/poi-in-pol", districtController.getPointInDistrict);

module.exports = Route;

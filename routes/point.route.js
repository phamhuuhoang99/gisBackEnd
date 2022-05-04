const Route = require("express").Router();
const pointController = require("../controllers/point.controller");

Route.get("/all", pointController.getAll);

module.exports = Route;

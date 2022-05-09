const provinceRoute = require("./province.route");
const pointRoute = require("./point.route");
const districtRoute = require("./district.route");

const route = app => {
  app.use("/api/provinces", provinceRoute);
  app.use("/api/points", pointRoute);
  app.use("/api/districts", districtRoute);
};

module.exports = route;

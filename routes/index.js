const provinceRoute = require("./province.route");
const pointRoute = require("./point.route");

const route = app => {
  app.use("/api/provinces", provinceRoute);
  app.use("/api/points", pointRoute);
};

module.exports = route;

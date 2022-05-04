const provinceRoute = require("./province.route");

const route = app => {
  app.use("/api/provinces", provinceRoute);
};

module.exports = route;

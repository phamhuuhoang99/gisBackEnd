const pointService = require("../services/point.services");

const getAll = async (req, res) => {
  const data = await pointService.getAll();
  res.send(data);
};

module.exports = { getAll };

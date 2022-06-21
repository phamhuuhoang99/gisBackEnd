const pointService = require("../services/point.service");

const getAll = async (req, res) => {
  const data = await pointService.getAll();
  res.send(data);
};

module.exports = { getAll };

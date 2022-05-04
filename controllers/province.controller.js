const provinceService = require("../services/province.service");

const getAll = async (req, res) => {
  const data = await provinceService.getAll();
  res.send(data);
};

const getPointInProvince = async (req, res) => {
  const { gid } = req.params;
  console.log(req.params);
  const data = await provinceService.getPointInProvince(gid);
  res.send(data);
};

module.exports = { getAll, getPointInProvince };

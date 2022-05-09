const districtService = require("../services/district.service");

const getPointInDistrict = async (req, res) => {
  const { objectid } = req.params;
  console.log(objectid);
  const data = await districtService.getPointInDistrict(objectid);
  res.json(data);
};

module.exports = { getPointInDistrict };

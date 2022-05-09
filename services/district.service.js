const db = require("../utils/db");

const getPointInDistrict = async objectid => {
  const sql = `select *,ST_AsGeoJSON(test.geom) as geoJson from test,dia_phan_huyen where st_intersects(test.geom,dia_phan_huyen.geom) and dia_phan_huyen.objectid=$1;`;
  const data = await db.query(sql, [objectid]);
  return data;
};

module.exports = {
  getPointInDistrict,
};

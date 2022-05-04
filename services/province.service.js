const db = require("../utils/db");

const getAll = async () => {
  const sql = `select *,ST_AsGeoJSON(geom) as geoJSON from dia_phan_tinh`;
  const data = await db.query(sql);
  return data;
};

const getPointInProvince = async gid => {
  const sql = `select ST_AsGeoJSON(poi.geom) as geoJSON,* from pofw as poi,dia_phan_tinh as pol where st_intersects(pol.geom,poi.geom) and pol.gid=$1`;
  const data = await db.query(sql, [gid]);
  return data;
};

module.exports = {
  getAll,
  getPointInProvince,
};

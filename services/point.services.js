const db = require("../utils/db");

const getAll = async () => {
  const sql = `select * from pofw`;
  const data = await db.query(sql);
  return data;
};

module.exports = {
  getAll,
};

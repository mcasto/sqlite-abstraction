const buildSql = require("./build-sql");

module.exports = async (context, db) => {
  const rec = await db.getAsync(buildSql(context));
  return rec || false;
};

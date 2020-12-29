const buildSql = require("./build-sql");

module.exports = async (context, db) => {
  return await db.allAsync(buildSql(context));
};

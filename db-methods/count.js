const buildSql = require("./build-sql");

module.exports = async (context, db, column) => {
  context.action = "SELECT";
  context.selectColumns = `COUNT(${column}) AS count`;
  const rec = await db.getAsync(buildSql(context));

  return rec.count;
};

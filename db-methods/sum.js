const buildSql = require("./build-sql");

module.exports = async (context, db, column) => {
  context.action = "SELECT";
  context.selectColumns = `SUM(${column}) AS totalValue`;

  const rec = await db.getAsync(buildSql(context));

  return rec.totalValue;
};

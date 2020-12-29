const buildSql = require("./build-sql");

module.exports = async (context, db, column) => {
  if (!column) return "Column required for AVG";

  context.action = "SELECT";
  context.selectColumns = `AVG(${column}) AS avgValue`;
  const rec = await db.getAsync(buildSql(context));

  return rec.avgValue;
};

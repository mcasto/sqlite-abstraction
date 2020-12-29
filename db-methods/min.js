const buildSql = require("./build-sql");

module.exports = async (context, db, column) => {

  context.action = "SELECT";
  context.selectColumns = `MIN(${column}) AS minValue`;
  const rec = await db.getAsync(buildSql(context));

  return rec.minValue;
};

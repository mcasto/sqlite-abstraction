const buildSql = require("./build-sql");

module.exports = async (context, db, column) => {

  context.action = "SELECT";
  context.selectColumns = `MAX(${column}) AS maxValue`;
  const rec = await db.getAsync(buildSql(context));

  return rec.maxValue;
};

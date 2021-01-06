module.exports = async (db, table, document) => {
  let colList = [],
    valList = [];

  Object.entries(document).map(([colName, value]) => {
    colList.push(`\`${colName}\``);
    valList.push(value);
  });

  const sql = `INSERT INTO \`${table}\` (${colList.join(
    ","
  )}) VALUES (${valList.map(() => "?").join(",")})`;

  const statement = db.prepare(sql, valList);
  await statement.runAsync();

  // returns inserted document (including any automatically generated ID field such as autoincrement)
  return await db.getAsync(
    `SELECT * FROM ${table} WHERE rowid = last_insert_rowid()`
  );
};

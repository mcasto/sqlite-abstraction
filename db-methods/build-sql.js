module.exports = (obj) => {
  const conditions = obj.whereConditions;

  let whereClause = "";
  if (conditions.length > 0) {
    for (let index in conditions) {
      const condition = conditions[index];
      if (condition.link == "") {
        whereClause += ` WHERE ${condition.column} `;
      } else {
        whereClause += ` ${condition.link} ${condition.column} `;
      }

      let value = condition.value;
      whereClause += ` ${condition.condition} ${value}`;
    }
  }

  let orderBy = "";

  if (obj.sortBy.length > 0) {
    orderBy = ` ORDER BY ${obj.sortBy
      .map(({ column, order }) => `${column} ${order}`)
      .join(",")}`;
  }

  const limitParams =
    obj.limit !== null ? ` LIMIT ${obj.offsetNum},${obj.limit}` : "";

  const sql = `${obj.action} ${obj.selectDistinct ? "DISTINCT" : ""} ${
    obj.selectColumns
  } FROM ${obj.table} ${whereClause} ${orderBy} ${limitParams}`;

  return sql;
};

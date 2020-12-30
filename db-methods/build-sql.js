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

  const joins = obj.joins
    .map(({ table, type, onConditions }) => {
      let conditions = onConditions.map((entry) => {
        const [link, condition] = Object.entries(entry).shift();
        return ` ${link.toUpperCase()} ${condition}`;
      });

      return ` ${type} JOIN ${table} ${conditions.join(" ")} `;
    })
    .join(" ");

  const sql = `${obj.action} ${obj.selectDistinct ? "DISTINCT" : ""} ${
    obj.selectColumns
  } FROM ${obj.table} ${joins} ${whereClause} ${orderBy} ${limitParams}`;

  console.log(sql);
  return sql;
};

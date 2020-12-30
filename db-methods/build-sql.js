module.exports = (context) => {
  const conditions = context.whereConditions;

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

  if (context.sortBy.length > 0) {
    orderBy = ` ORDER BY ${context.sortBy
      .map(({ column, order }) => `${column} ${order}`)
      .join(",")}`;
  }

  const limitParams =
    context.limit !== null
      ? ` LIMIT ${context.offsetNum},${context.limit}`
      : "";

  const joins = context.joins
    .map(({ table, type, onConditions }) => {
      let conditions = onConditions.map((entry) => {
        const [link, condition] = Object.entries(entry).shift();
        return ` ${link.toUpperCase()} ${condition}`;
      });

      return ` ${type} JOIN ${table} ${conditions.join(" ")} `;
    })
    .join(" ");

  // mc-todo: handle the HAVING clause of context.group

  const sql = `${context.action} ${context.selectDistinct ? "DISTINCT" : ""} ${
    context.selectColumns
  } FROM ${context.table} ${joins} ${whereClause} ${
    context.group
  } ${orderBy} ${limitParams}`;

  console.log(sql);
  return sql;
};

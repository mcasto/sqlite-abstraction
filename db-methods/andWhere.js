module.exports = (context, column) => {
  context.whereCondition.column = column;
  context.whereCondition.link = context.whereConditions.length > 0 ? "OR" : "";
  /*
    The conditional above is a fallback in case user enters andWhere without a preceding Where clause
  */

  return context;
};

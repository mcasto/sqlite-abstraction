module.exports = (context, column) => {
  context.whereCondition.column = column;
  context.whereCondition.link = context.whereConditions.length > 0 ? "AND" : "";
  /*
    The conditional above allows user to enter .where ... .where ... .where and defaults to an "AND" link.
  */

  return context;
};

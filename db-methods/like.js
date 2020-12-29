module.exports = (context, value) => {
  context.whereCondition.condition = " LIKE ";
  context.whereCondition.value = `"${value}"`;
  context.whereConditions.push(context.whereCondition);
  context.whereCondition = { column: "", link: "", condition: "", value: "" };

  return context;
};

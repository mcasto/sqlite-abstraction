module.exports = (context) => {
  context.whereCondition.condition = " NOT NULL ";
  context.whereCondition.value = "";
  context.whereConditions.push(context.whereCondition);
  context.whereCondition = { column: "", link: "", condition: "", value: "" };

  return context;
};

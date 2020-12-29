module.exports = (context) => {
  context.whereCondition.condition = " IS NULL ";
  context.whereCondition.value = "";
  context.whereConditions.push(context.whereCondition);
  context.whereCondition = { column: "", link: "", condition: "", value: "" };

  return context;
};

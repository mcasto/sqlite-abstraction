module.exports = (context, value) => {
  value = isFinite(value) ? value : `"${value}"`;

  context.whereCondition.condition = " > ";
  context.whereCondition.value = value;
  context.whereConditions.push(context.whereCondition);
  context.whereCondition = { column: "", link: "", condition: "", value: "" };

  return context;
};

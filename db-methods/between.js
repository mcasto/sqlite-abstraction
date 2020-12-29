module.exports = (context, minValue, maxValue) => {
  minValue = isFinite(minValue) ? minValue : `"${minValue}"`;
  maxValue = isFinite(maxValue) ? maxValue : `"${maxValue}"`;

  context.whereCondition.condition = " BETWEEN ";
  context.whereCondition.value = `${minValue} AND ${maxValue}`;
  context.whereConditions.push(context.whereCondition);
  context.whereCondition = { column: "", link: "", condition: "", value: "" };

  return context;
};

module.exports = (context, valueList) => {
  valueList = valueList.map((v) => (v = isFinite(v) ? v : `"${v}"`));

  context.whereCondition.condition = " IN ";
  context.whereCondition.value = `(${valueList.join(", ")})`;
  context.whereConditions.push(context.whereCondition);
  context.whereCondition = {
    column: "",
    link: "",
    condition: "",
    value: "",
  };

  return context;
};

const { isArray } = require("lodash");

module.exports = (context, table, onConditions) => {
  if (!isArray(onConditions)) onConditions = [onConditions];

  context.joins.push({
    table,
    type: "INNER",
    onConditions,
  });

  return context;
};

const { isArray } = require("lodash");

module.exports = (context, type, table, onConditions) => {
  if (!isArray(onConditions)) onConditions = [onConditions];

  context.joins.push({
    table,
    type,
    onConditions,
  });

  return context;
};

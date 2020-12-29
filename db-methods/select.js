const { isObject, isArray } = require("lodash");

module.exports = (context, columns) => {
  if (isObject(columns) && !isArray(columns)) {
    // parse object keys/values for "column AS alias" configuration
    columns = Object.keys(columns)
      .map((key) => `${key} AS ${columns[key]}`)
      .join(", ");
  }

  if (isArray(columns)) {
    columns = columns.join(", ");
  }

  context.selectColumns = columns;
  context.action = "SELECT";

  return context;
};

const { isArray } = require("lodash");

module.exports = (context, fields) => {
  if (!isArray(fields)) fields = [fields];

  context.group = ` GROUP BY ${fields.join(", ")} `;

  return context;
};

const defaults = require("./defaults");

module.exports = (context) => {
  for (let key in defaults) {
    context[key] = defaults[key];
  }
};

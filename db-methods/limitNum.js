module.exports = (context, value) => {
  context.limit = value;

  function offset(value) {
    return require("./offset")(context, value);
  }

  return { ...context, offset };
};

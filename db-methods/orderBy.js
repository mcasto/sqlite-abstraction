module.exports = (context, column, order) => {
  order = order.toUpperCase();

  context.sortBy.push({ column, order });

  return context;
};

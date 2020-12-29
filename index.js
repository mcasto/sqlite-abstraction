const Promise = require("bluebird");
const sqlite3 = Promise.promisifyAll(require("sqlite3").verbose());
const reset = require("./db-methods/reset");

function Database(filename = ":memory:") {
  const db = new sqlite3.Database(filename);

  return {
    ...require("./db-methods/defaults"),
    from,
    distinct,
    select,
    all,
    first,
    count,
    max,
    min,
    avg,
    sum,
    where,
    andWhere,
    orWhere,
    is,
    eq: is,
    isNot,
    ne: isNot,
    lessThan,
    lt: lessThan,
    greaterThan,
    gt: greaterThan,
    atLeast,
    gte: atLeast,
    atMost,
    lte: atMost,
    between,
    notBetween,
    in: isIn,
    notIn,
    like,
    notLike,
    isNull,
    notNull,
    orderBy,
    limitNum,
  };

  // ----- METHODS THAT RETURN RESULTS -----
  async function all() {
    const results = await require("./db-methods/all")(this, db);
    reset(this);
    return results;
  }

  async function first() {
    const results = await require("./db-methods/first")(this, db);
    reset(this);
    return results;
  }

  async function count(column = "*") {
    const results = await require("./db-methods/count")(this, db, column);
    reset(this);
    return results;
  }

  async function max(column) {
    const results = await require("./db-methods/max")(this, db, column);
    reset(this);
    return results;
  }

  async function min(column) {
    const results = await require("./db-methods/min")(this, db, column);
    reset(this);
    return results;
  }

  async function avg(column) {
    const results = await require("./db-methods/avg")(this, db, column);
    reset(this);
    return results;
  }

  async function sum(column) {
    const results = await require("./db-methods/sum")(this, db, column);
    reset(this);
    return results;
  }
  // ----------

  // ----- METHODS THAT SET QUERY COMPONENTS -----
  function from(table) {
    return require("./db-methods/from")(this, table);
  }

  function distinct() {
    return require("./db-methods/distinct")(this);
  }

  function select(columns = "*") {
    return require("./db-methods/select")(this, columns);
  }

  function where(column) {
    return require("./db-methods/where")(this, column);
  }

  function andWhere(column) {
    return require("./db-methods/andWhere")(this, column);
  }

  function orWhere(column) {
    return require("./db-methods/orWhere")(this, column);
  }

  function is(value) {
    return require("./db-methods/is")(this, value);
  }

  function isNot(value) {
    return require("./db-methods/isNot")(this, value);
  }

  function lessThan(value) {
    return require("./db-methods/lessThan")(this, value);
  }

  function greaterThan(value) {
    return require("./db-methods/greaterThan")(this, value);
  }

  function atLeast(value) {
    return require("./db-methods/atLeast")(this, value);
  }

  function atMost(value) {
    return require("./db-methods/atMost")(this, value);
  }

  function between(minValue, maxValue) {
    return require("./db-methods/between")(this, minValue, maxValue);
  }

  function notBetween(minValue, maxValue) {
    return require("./db-methods/notBetween")(this, minValue, maxValue);
  }

  function isIn(valueList = []) {
    return require("./db-methods/isIn")(this, valueList);
  }

  function notIn(valueList = []) {
    return require("./db-methods/notIn")(this, valueList);
  }

  function like(value) {
    return require("./db-methods/like")(this, value);
  }

  function notLike(value) {
    return require("./db-methods/notLike")(this, value);
  }

  function isNull() {
    return require("./db-methods/isNull")(this);
  }

  function notNull() {
    return require("./db-methods/notNull")(this);
  }

  function orderBy(column, order = "asc") {
    return require("./db-methods/orderBy")(this, column, order);
  }

  function limitNum(value) {
    return require("./db-methods/limitNum")(this, value);
  }
}

(async () => {
  const db = Database("./database.db");
  const test = await db
    .from("test")
    .where("firstName")
    .like("%m%")
    .orWhere("lastName")
    .like("%c%")
    .select()
    .all();
  console.log(test);
})();

/**
 *
 * @param {String} value
 */
const encode = value => {
  return Buffer.from(value, "utf-8").toString("base64");
};
/**
 *
 * @param {String} value
 */
const decode = value => {
  return Buffer.from(value, "base64").toString("utf-8");
};

module.exports = {
  encode,
  decode
};

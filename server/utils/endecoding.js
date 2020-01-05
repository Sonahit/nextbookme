/**
 *
 * @param {String} value
 */
const encode = value => {
  return value.toBase64();
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

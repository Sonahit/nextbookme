const validator = require("validator").default;
const BaseValidation = require("./BaseValidation");

module.exports = class NumberValidation extends BaseValidation {
  constructor(fieldName, body, validator, args) {
    super(fieldName, body, validator, args);
    if (args) {
      this._expected = args[0];
    }
  }

  get expected() {
    return parseInt(this._expected);
  }

  static INTEGER(value) {
    return `"${value}" must be number`;
  }
  static MIN(value, expected) {
    return `"${value}" less than minimum ${expected}`;
  }

  static MAX(value, expected) {
    return `"${value}" larger than maximum ${expected}`;
  }

  static LESS(value, expected) {
    return `"${value}" should be less than ${expected}`;
  }
  static MORE(value, expected) {
    return `"${value}" should be more than ${expected}`;
  }

  static LESS_EQUALS(value, expected) {
    return `"${value}" should be less or equals than ${expected}`;
  }

  static MORE_EQUALS(value, expected) {
    return `"${value}" should be more or equals than ${expected}`;
  }

  static EQUALS(value, expected) {
    return `"${value}" should be equals ${expected}`;
  }
  /**
   * @private
   * @param {number} value
   * @param {number} expected
   */
  numberIsMore(value, expected) {
    return value > expected;
  }
  /**
   * @private
   * @param {number} value
   * @param {number} expected
   */
  numberIsLess(value, expected) {
    return value < expected;
  }
  /**
   * @private
   * @param {number} value
   * @param {number} expected
   */
  numberIsMoreOrEquals(value, expected) {
    return value >= expected;
  }
  /**
   * @private
   * @param {number} value
   * @param {number} expected
   */
  numberIsLessOrEquals(value, expected) {
    return value <= expected;
  }
  /**
   * @private
   * @param {number} value
   * @param {number} expected
   */
  numberIsEquals(value, expected) {
    return value === expected;
  }
  min() {
    if (this.numberIsMore(this.value, this.expected)) return true;
    throw new Error(NumberValidation.MIN(this.value, this.expected));
  }
  max() {
    if (this.numberIsLess(this.value, this.expected)) return true;
    throw new Error(NumberValidation.MAX(this.value, this.expected));
  }
  ">="() {
    if (this.numberIsMoreOrEquals(this.value, this.expected)) return true;
    throw new Error(NumberValidation.MORE_EQUALS(this.value, this.expected));
  }
  "<="() {
    if (this.numberIsLessOrEquals(this.value, this.expected)) return true;
    throw new Error(NumberValidation.LESS_EQUALS(this.value, this.expected));
  }
  "<"() {
    if (this.numberIsLess(this.value, this.expected)) return true;
    throw new Error(NumberValidation.LESS(this.value, this.expected));
  }
  ">"() {
    if (this.numberIsMore(this.value, this.expected)) return true;
    throw new Error(NumberValidation.MORE(this.value, this.expected));
  }

  "=="() {
    if (this.numberIsEquals(this.value, this.expected)) return true;
    throw new Error(NumberValidation.EQUALS(this.value, this.expected));
  }

  integer() {
    if (!isNaN(parseInt(this.value))) return true;
    throw new Error(NumberValidation.INTEGER(this.value));
  }
};

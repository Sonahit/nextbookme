const validator = require("validator").default;
const BaseValidation = require("./BaseValidation");

module.exports = class StringValidation extends BaseValidation {
  constructor(fieldName, body, validator, args) {
    super(fieldName, body, validator, args);
    if (args) {
      this.expected = args[0];
    }
  }

  static STRING(value) {
    return `"${value}" must be string`;
  }
  static MIN(value, expected) {
    return `"${value}" less than minimum ${expected}`;
  }

  static MAX(value, expected) {
    return `"${value}" larger than maximum ${expected}`;
  }
  static LENGTH_MORE(value, expected) {
    return `"${value}" length should be more or equals than ${expected}`;
  }
  static LENGTH_MIN(value, expected) {
    return `"${value}" length should be less or equals than ${expected}`;
  }
  /**
   * @protected
   * @param {string} value
   * @param {number} expected
   */
  stringIsMore(value, expected) {
    return validator.isLength(value, {
      min: expected,
      max: Number.MAX_SAFE_INTEGER
    });
  }

  /**
   * @protected
   * @param {string} value
   * @param {number} expected
   */
  stringIsLess(value, expected) {
    return validator.isLength(value, {
      min: 0,
      max: expected
    });
  }

  string() {
    if (typeof this.value === "string") {
      const check = !this.value.match(/\W/gi);
      if (check) return true;
    }
    throw new Error(StringValidation.STRING(this.value));
  }
  length_min() {
    if (this.stringIsMore(this.value, parseInt(this.expected))) return true;
    throw new Error(
      StringValidation.LENGTH_MIN(this.value, parseInt(this.expected))
    );
  }
  length_max() {
    if (this.stringIsLess(this.value, parseInt(this.expected))) return true;
    throw new Error(
      StringValidation.LENGTH_MORE(this.value, parseInt(this.expected))
    );
  }
};

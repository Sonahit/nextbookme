module.exports = class BaseValidation {
  constructor(fieldName, body, validator, args) {
    this.fieldName = fieldName;
    this.body = body;
    this.validator = validator;
    this.args = args;
  }

  get value() {
    return this.body[this.fieldName];
  }
  static REQUIRED(fieldName) {
    return `Field ${fieldName} is required`;
  }
  static EMPTY(fieldname) {
    return `Field ${fieldName} is empty`;
  }

  required() {
    if (this.body[this.fieldName]) return true;
    throw new Error(BaseValidation.REQUIRED(this.fieldName));
  }

  notempty() {
    if (this.body[this.fieldName]) return true;
    throw new Error(BaseValidation.EMPTY(this.fieldName));
  }
  validate() {
    try {
      const success = this[this.validator](this.args);
      return {
        message: `${this.fieldName} OK`,
        field: this.fieldName,
        success
      };
    } catch (err) {
      return {
        success: false,
        field: this.fieldName,
        message: err.message
      };
    }
  }
};

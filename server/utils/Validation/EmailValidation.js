const validator = require("validator").default;
const BaseValidation = require("./BaseValidation");

module.exports = class EmailValidation extends BaseValidation {
  static EMAIL_WRONG(value) {
    return `Email "${value}" is wrong`;
  }
  email() {
    if (validator.isEmail(this.value)) return true;
    throw new Error(EmailValidation.EMAIL_WRONG(this.value));
  }
};

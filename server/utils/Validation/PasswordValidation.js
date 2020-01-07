const validator = require("validator").default;
const StringValidation = require("./StringValidation");

module.exports = class PasswordValidation extends StringValidation {
  static PASSWORD_EMPTY() {
    return `Password field should not be empty`;
  }
  static CONFIRMED_EMPTY() {
    return `confirmedPassword field should not be empty`;
  }
  static CONFIRMED_WRONG(value, expected) {
    return `"${value}" larger than maximum ${expected}`;
  }
  confirmed() {
    const password = this.body["password"];
    if (!password) {
      throw new Error(PasswordValidation.PASSWORD_EMPTY());
    }
    const confirmPassword = this.body["confirmPassword"];
    if (!confirmPassword) {
      throw new Error(PasswordValidation.CONFIRMED_EMPTY());
    }
    if (validator.equals(password, confirmPassword)) return true;
    throw new Error(
      PasswordValidation.CONFIRMED_WRONG(password, confirmPassword)
    );
  }
};

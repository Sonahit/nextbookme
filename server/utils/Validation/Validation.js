const BaseValidation = require("./BaseValidation");
const EmailValidation = require("./EmailValidation");
const PasswordValidation = require("./PasswordValidation");
const NumberValidation = require("./NumberValidation");
const StringValidation = require("./StringValidation");

/**
 * @typedef {import('../../middleware/validator').Rule} Rule
 * @typedef {import('../../middleware/validator').ValidatorType} ValidatorType
 * @typedef {Object} Field
 * @property {String} name
 * @property {String} value
 *
 * @param {import('koa').Context} ctx
 * @param {Field} field
 * @param {ValidatorType[]} validationRules
 */
const validation = (ctx, field, validationRules) => {
  if (!ctx.request.body) throw new Error("Body should be defined");
  const validators = validationRules.map(v => {
    if (ValidationTypes[v.rule]) {
      const validation = new ValidationTypes[v.rule](
        field.name,
        ctx.request.body,
        v.rule,
        v.args
      );
      return {
        rule: v.rule,
        validation
      };
    }
    throw new Error(`Rule ${v.rule} doesn't exists`);
  });
  const results = validators.reduce(
    (acc, v) => {
      const result = v.validation.validate();
      if (result.success) {
        acc.valid.push(result);
      } else {
        acc.success = false;
        acc.notValid.push(result);
      }
      return acc;
    },
    {
      success: true,
      valid: [],
      notValid: []
    }
  );
  const isValid = results.success;
  const messages = results.notValid.map(v => v.message);
  return [isValid, messages];
};

const ValidationTypes = {
  required: BaseValidation,
  email: EmailValidation,
  confirmed: PasswordValidation,
  integer: NumberValidation,
  length_min: StringValidation,
  length_max: StringValidation,
  max: NumberValidation,
  min: NumberValidation,
  string: StringValidation
};

module.exports = validation;

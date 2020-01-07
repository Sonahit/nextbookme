const jsonResponse = require("../utils/JsonResponse");
const validation = require("../utils/Validation/Validation");
/**
 * @typedef {import('koa').Context} Context
 * @typedef {import('koa').Next} Next
 */

/**
 * Middleware definition
 * @typedef {function(Context, Next)} Middleware
 * @retuns Middleware
 */
/**
 * @typedef ValidatorType
 * @property {String} rule
 * @property {String[]} args
 *
 * @typedef {Object.<string, ValidatorType>} Validator
 */
/**
 * @typedef {Object} Rule
 * @property {String} field
 * @property {Validator[]} validators
 */

/**
 * @param {Rule[]} rules
 * @returns {Middleware}
 */
module.exports = rules => {
  /**
   * @type {Validator} validtors
   */
  const validators = rules.reduce((acc, rule) => {
    const parsedRules = rule.validators.map(v => {
      const [rule, args] = v.split(":");
      return {
        rule,
        args
      };
    });
    return {
      [rule.field]: parsedRules,
      ...acc
    };
  }, {});
  return (ctx, next) => {
    const fields = Object.keys(ctx.request.body).map(key => ({
      name: key,
      /**
       * @type {String} value
       */
      value: ctx.request.body[key]
    }));
    const results = fields.map(field => {
      if (validators[field.name]) {
        const validationRules = validators[field.name];
        const [isValid, messages] = validation(ctx, field, validationRules);
        return {
          field: field.name,
          isValid,
          message: messages
        };
      }
      return {
        field: field.name,
        isValid: true,
        message: "Field has no rules"
      };
    });
    const isValid = results.every(field => field.isValid === true);
    if (isValid) return next();
    const notValid = results.filter(r => !r.isValid);
    jsonResponse(
      ctx,
      {
        messages: notValid.map(r => r.message),
        success: false
      },
      400
    );
  };
};

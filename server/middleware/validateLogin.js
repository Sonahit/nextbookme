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
 * @returns {Middleware} middleware
 */
module.exports = () => {
  return function(ctx, next) {
    if (ctx.isAuthenticated()) {
      return next();
    }
    ctx.response.append("Content-Type", "application/json");
    return ctx.throw(401, { message: "Not authenticated" });
  };
};

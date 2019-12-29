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
 * @param {String[] | String} routes
 * @returns {Middleware} middleware
 */
module.exports = routes => {
  const ensureArray = val => {
    if (Array.isArray(val)) return val;
    return [val];
  };
  const rts = ensureArray(routes);
  return function(ctx, next) {
    const url = ctx.req.url;
    if (rts.some(rt => rt === url)) {
      if (ctx.isAuthenticated()) {
        return next();
      }
      ctx.response.append("Content-Type", "application/json");
      return ctx.throw(401, { message: "Not authenticated" });
    }
    return next();
  };
};

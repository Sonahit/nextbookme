const jsonResponse = require("../utils/JsonResponse");
/**
 * @param {import('koa-router')} router
 */
module.exports = router => {
  /**
   * @param {import('koa').Context} ctx
   * @param {import('koa').Next} next
   */
  const handlePost = (ctx, next) => {
    jsonResponse(ctx, "No data");
  };
  router.post("/login", handlePost);
};

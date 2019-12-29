const jsonResponse = require("../../utils/JsonResponse");
const urlPath = "/dashboard";
/**
 * @param {import('koa-router')} router
 * @param {import("next/dist/next-server/server/next-server").default} app
 */
module.exports = (router, app) => {
  /**
   * @param {import('koa').Context} ctx
   * @param {import('koa').Next} next
   */
  const handlePost = (ctx, next) => {
    jsonResponse(ctx, "No data");
  };
  /**
   * @param {import('koa').Context} ctx
   * @param {import('koa').Next} next
   */
  const handleGet = (ctx, next) => {
    app.getRequestHandler()(ctx.req, ctx.res, urlPath, ctx.query);
  };
  router.get(urlPath, handleGet).post(urlPath, handlePost);
};

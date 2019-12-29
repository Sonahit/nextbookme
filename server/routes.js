/**
 * @typedef {import("next/dist/next-server/server/next-server").default} NextServer
 */

const Router = require("koa-router");
const validateLogin = require("./middleware/validateLogin");
const apiRouter = new Router({ prefix: "/api/v1" });
const authRouter = new Router();

const protectedRoutes = ["/dashboard", "/signoff"];

/**
 * @param {import('koa')} server
 * @param {NextServer} app
 */
module.exports = (server, app) => {
  const routesPath = `${__dirname}/routes`;
  require(`fs`)
    .readdirSync(routesPath)
    .forEach(route => require(`${routesPath}/${route}`)(apiRouter));
  authRouter.use(validateLogin(protectedRoutes));
  protectedRoutes.forEach(route => {
    authRouter.get(route, (ctx, next) => {
      app.getRequestHandler()(ctx.req, ctx.res);
    });
  });

  server
    .use(apiRouter.routes())
    .use(apiRouter.allowedMethods())
    .use(authRouter.routes())
    .use(authRouter.allowedMethods());
};

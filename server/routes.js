/**
 * @typedef {import("next/dist/next-server/server/next-server").default} NextServer
 */
const fs = require(`fs`);
const Router = require("koa-router");
const validateLogin = require("./middleware/validateLogin");
const apiRouter = new Router({ prefix: "/api/v1" });
const authRouter = new Router();
const routes = `${__dirname}/routes`;
const protectedRoutes = `${__dirname}/routes/protected`;

/**
 * @param {import('koa')} server
 * @param {NextServer} app
 */
module.exports = (server, app) => {
  fs.readdirSync(routes).forEach(route => {
    if (route.endsWith(".js")) {
      require(`${routes}/${route}`)(apiRouter);
    }
  });
  authRouter.use(validateLogin(protectedRoutes));
  fs.readdirSync(protectedRoutes).forEach(route => {
    if (route.endsWith(".js")) {
      require(`${protectedRoutes}/${route}`)(authRouter, app);
    }
  });

  server
    .use(apiRouter.routes())
    .use(apiRouter.allowedMethods())
    .use(authRouter.routes())
    .use(authRouter.allowedMethods());
};

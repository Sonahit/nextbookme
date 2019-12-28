const Router = require("koa-router");

const apiRouter = new Router({ prefix: "/api/v1" });
/**
 * @param {import('koa')} app
 */
module.exports = app => {
  const routesPath = `${__dirname}/routes`;
  require(`fs`)
    .readdirSync(routesPath)
    .forEach(route => require(`${routesPath}/${route}`)(apiRouter));
  app.use(apiRouter.routes());
  app.use(apiRouter.allowedMethods());
};

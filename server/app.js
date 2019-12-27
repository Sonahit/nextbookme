/**
 * @typedef {import("next/dist/next-server/server/next-server").default} NextServer
 */

const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const logger = require("koa-logger");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";

/**
 * @type {NextServer}
 */
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const app = new Koa();
app.use(logger());
app.use(bodyParser());

nextApp.prepare().then(() => {
  app.use(async ctx => {
    await handle(ctx.req, ctx.res);
  });
});

module.exports = app;

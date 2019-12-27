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
const app = next({ dev });
const handle = app.getRequestHandler();

const server = new Koa();
server.use(logger());
server.use(bodyParser());

app.prepare().then(() => {
  const routes = require("./routes");
  routes(server);
  server
    .use(async ctx => {
      await handle(ctx.req, ctx.res);
    })
    .listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
});

module.exports = server;

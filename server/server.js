/**
 * @typedef {import("next/dist/next-server/server/next-server").default} NextServer
 */

const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const logger = require("koa-logger");
const session = require("koa-session");
const passport = require("koa-passport");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const config = require("./config/config");

/**
 * @type {NextServer}
 */
const app = next({ dev });
const handle = app.getRequestHandler();

const server = new Koa();
server.use(logger());
server.use(bodyParser());
server.keys = ["secret"];
server.use(session({}, server));
require("./middleware/auth");
server.use(passport.initialize());
server.use(passport.session());

app.prepare().then(() => {
  const routes = require("./routes");
  routes(server, app);
  server
    .use(async ctx => {
      await handle(ctx.req, ctx.res);
    })
    .listen(config.port, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${config.port}`);
    });
});

module.exports = server;

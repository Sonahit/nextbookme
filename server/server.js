/**
 * @typedef {import("next/dist/next-server/server/next-server").default} NextServer
 */

const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const logger = require("koa-logger");
const session = require("koa-session");
const passport = require("koa-passport");
const cors = require("@koa/cors");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const config = require("./config/config");
const database = require("./database/index");
require("./middleware/auth");
/**
 * @type {NextServer}
 */
const app = next({ dev });
const handle = app.getRequestHandler();
const server = new Koa();
server.use(logger());
server.use(cors({ credentials: true }));
server.use(bodyParser());

server.keys = ["secret"];
server
  .use(
    session(
      {
        key: "session-token"
      },
      server
    )
  )
  .use(passport.initialize())
  .use(passport.session());

database.sequelize
  .authenticate()
  .then(() => {
    console.log(`> Connection to database has been established`);
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
  })
  .catch(err => {
    console.error(`Can not connect to database:`, err);
  });

module.exports = server;

const jsonResponse = require("../utils/JsonResponse");
const passport = require("koa-passport");
/**
 * @param {import('koa-router')} router
 */
module.exports = router => {
  // TODO: FIX ME
  /**
   * @param {import('koa').Context} ctx
   * @param {import('koa').Next} next
   */
  const handlePost = (ctx, next) => {
    return passport.authenticate("local", async (err, user, info, status) => {
      if (!user) {
        jsonResponse(
          ctx,
          {
            success: false,
            message: info.message
          },
          status
        );
        ctx.throw(status);
      } else {
        await ctx.login(user);
        return ctx.redirect("/");
      }
    })(ctx);
  };
  /**
   * @param {import('koa').Context} ctx
   * @param {import('koa').Next} next
   */
  const handleGet = (ctx, next) => {
    if (!ctx.isAuthenticated()) {
      return jsonResponse(
        ctx,
        {
          success: false,
          message: "Hasn't been loggined"
        },
        401
      );
    } else {
      ctx.cookies.set("session-secret", "secret");
      return jsonResponse(
        ctx,
        {
          success: true,
          message: "You are loggined"
        },
        200
      );
    }
  };
  router.post("/login", handlePost);
  router.get("/login", handleGet);
};

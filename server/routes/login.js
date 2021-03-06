const jsonResponse = require("../utils/JsonResponse");
const passport = require("koa-passport");
const urlPath = "/login";
/**
 * @param {import('koa-router')} router
 */
module.exports = router => {
  /**
   * @param {import('koa').Context} ctx
   * @param {import('koa').Next} next
   */
  const handlePost = (ctx, next) => {
    return passport.authenticate("local", async (err, user, info, status) => {
      console.log(err);
      if (!user) {
        jsonResponse(
          ctx,
          {
            success: false,
            message: info
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
  router.post(urlPath, handlePost);
  router.get(urlPath, handleGet);
};

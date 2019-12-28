const jsonResponse = require("../utils/JsonResponse");
const passport = require("koa-passport");
/**
 * @param {import('koa-router')} router
 */
module.exports = router => {
  /**
   * @param {import('koa').Context} ctx
   * @param {import('koa').Next} next
   */
  const handlePost = (ctx, next) => {
    return passport.authenticate("local", (err, user, info, status) => {
      if (!user) {
        jsonResponse(
          ctx,
          {
            success: false,
            message: "Wrong credentials"
          },
          401
        );
        ctx.throw(401);
      } else {
        jsonResponse(ctx, {
          success: true
        });
        ctx.redirect("/");
        return ctx.login(user);
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

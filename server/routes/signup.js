const jsonResponse = require("../utils/JsonResponse");
const urlPath = "/signup";
const db = require(`../database/index`);
/**
 * @param {import('koa-router')} router
 */
module.exports = router => {
  /**
   * @param {import('koa').Context} ctx
   * @param {import('koa').Next} next
   */
  const handlePost = async (ctx, next) => {
    const User = db.models.User;
    const {
      username,
      email,
      password,
      firstName = null,
      lastName = null
    } = ctx.request.body;
    const user = await User.findOrCreate({
      defaults: {
        firstName,
        lastName,
        password
      },
      where: {
        username,
        email
      }
    }).then(([user, created]) => (created ? user : false));
    if (user) {
      jsonResponse(
        ctx,
        {
          success: true
        },
        200
      );
    }
    jsonResponse(
      ctx,
      {
        success: false,
        message: "User exists"
      },
      200
    );
  };
  router.post(urlPath, handlePost);
};

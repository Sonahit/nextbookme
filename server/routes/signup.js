const jsonResponse = require("../utils/JsonResponse");
const urlPath = "/signup";
const db = require(`../database/index`);
const validator = require("../middleware/validator");
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
        password,
        username,
        email
      },
      where: {
        [db.Sequelize.Op.or]: {
          username,
          email
        }
      }
    }).then(([user, created]) => (created ? user : false));
    if (user) {
      return jsonResponse(
        ctx,
        {
          success: true
        },
        200
      );
    }
    return jsonResponse(
      ctx,
      {
        success: false,
        message: "User exists"
      },
      400
    );
  };
  /**
   * @type {import('../middleware/validator').Rule[]}
   */
  const rules = [
    {
      field: "username",
      validators: ["required", "length_min:2"]
    },
    {
      field: "email",
      validators: ["required", "email"]
    },
    {
      field: "password",
      validators: ["required", "confirmed", "length_min:2"]
    },
    {
      field: "firstName",
      validators: ["string"]
    },
    {
      field: "lastName",
      validators: ["string"]
    }
  ];
  router.post(urlPath, validator(rules), handlePost);
};

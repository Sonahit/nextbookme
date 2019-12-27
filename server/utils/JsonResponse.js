/**
 * @param {import('koa').Context} ctx
 * @param {object} [data]
 * @param {number} [status]
 */
const jsonResponse = (ctx, data = {}, status = 200) => {
  ctx.set("Content-Type", "application/json");
  ctx.status = status;
  if (data instanceof String) data = { message: data };
  if (data instanceof Array) data = { message: { ...data } };
  data.status = status;
  ctx.body = JSON.stringify(data);
  return ctx;
};
module.exports = jsonResponse;

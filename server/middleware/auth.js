const passport = require("koa-passport");
const db = require("../database/index");
const endecoding = require("../utils/endecoding");
const fetchUser = (() => {
  return async function(username) {
    const User = db.models.User;
    const user = await User.findOne({
      where: {
        username
      }
    });
    return user;
  };
})();

passport.serializeUser(function(user, done) {
  done(null, user.username);
});

passport.deserializeUser(async function(username, done) {
  try {
    const user = await fetchUser(username);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

const LocalStrategy = require("passport-local").Strategy;
passport.use(
  new LocalStrategy(function(username, password, done) {
    fetchUser(username, password)
      .then(user => {
        if (user && user.password === password) {
          done(null, user);
        }
        done(null, false);
      })
      .catch(err => done(err));
  })
);

const { validateToken } = require("../config/token");

function validateUser(req, res, next) {
  const token = req.cookies.token;
  if (token) {
    const { payload } = validateToken(token);

    req.user = payload;

    if (payload) return next();
  }
  res.status(401).send("no hay usuario logueado");
}

module.exports = validateUser;

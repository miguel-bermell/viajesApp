const { verifyToken } = require("../services/jwtService");
const { SECURITY_ENABLE } = require("../utils/constants");

const tokenValidation = (req, res, next) => {
  if (SECURITY_ENABLE) {
    if (req.headers.authorization) {
      const token = req.headers.authorization.slice(7);
      const { id, email, role, name } = verifyToken(token);
      req.user = { id, email, role, name };
      req.tokenValid = true;
    }
  }
  next();
};

module.exports = tokenValidation;

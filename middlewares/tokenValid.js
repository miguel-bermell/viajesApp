const { SECURITY_ENABLE } = require("../utils/constants");

exports.IsTokenValid = () => {
  if (SECURITY_ENABLE) {
    return (req, res, next) => {
      console.log(req.tokenValid);
      if (!req.tokenValid) {
        res.status(401);
        throw new Error("Not authorized to access this resource");
      }
      next();
    };
  }

  return (req, res, next) => {
    next();
  };
};

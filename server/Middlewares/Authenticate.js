var jwt = require("jsonwebtoken");
var { JWT_SECRET } = require("../Config/index.js");

function verifyToken(req, res, next) {
  var token = req.headers.authorization;

  if (!token)
    return res.status(401).send({ auth: false, message: "No token provided." });

  jwt.verify(token, JWT_SECRET, function (err, decoded) {
    if (err)
      return res
        .status(401)
        .send({ auth: false, message: "Failed to authenticate token." });

    // if everything good, save to request for use in other routes
    req.current_user_id = decoded.user_id;
    next();
  });
}

module.exports = verifyToken;

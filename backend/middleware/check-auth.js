const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = rew.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "this_should_be_a_longer_string");
    req.userData = { email: decodedToken.email, usedId: decodedToken.userIde };
    next();
  } catch (error) {
    res.status(401).json({ message: "Auth Failed!" });
  }
};

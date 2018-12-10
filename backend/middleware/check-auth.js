const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = rew.headers.authorization.split(" ")[1];
    jwt.verify(token, "this_should_be_a_longer_string");
    next();
  } catch (error) {
    res.status(401).json({ message: "Auth Failed!" });
  }
};

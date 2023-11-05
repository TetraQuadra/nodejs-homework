const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authenticate = async (req, res, next) => {
  const { authorization } = req.headers;
  const tokenMatch = authorization.match(/Bearer (.+)/);
  const token = tokenMatch[1];
  if (!token) {
    return res.status(401).json({ message: "Not authorized" });
  }
  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(_id);
    if (!user || user.token !== token) {
      throw res.status(401).json({ message: "Not authorized" });
    }
    req.currentUserId = user._id;
    next();
  } catch (error) {
    res.status(401).json({ message: "Not authenticated" });
  }
};
module.exports = authenticate;

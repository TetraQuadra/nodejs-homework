const register = require("./register");
const login = require("./login");
const getCurrent = require("./getCurrent");
const updateSubscription = require("./updateSubscription");
const uploadAvatar = require("./uploadAvatar");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail");

module.exports = {
  register,
  login,
  getCurrent,
  updateSubscription,
  uploadAvatar,
  resendVerifyEmail,
  verifyEmail,
};

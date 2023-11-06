const createErrorMessage = require("../../helpers/createErrorMessage");
const User = require("../../models/user");

const uploadAvatar = async (req, res, next) => {
  try {
    const avatarURL = { avatarURL: req.avatarUrl };
    const response = await User.findByIdAndUpdate(req.user, avatarURL, {
      new: true,
    });
    if (!response) {
      throw createErrorMessage(500);
    }
    res.status(201).json({
      avatarURL,
    });
  } catch (error) {
    const { status = 500, message = "Internal server error" } = error;
    res.status(status).json({ status, message });
  }
};

module.exports = uploadAvatar;

const createErrorMessage = require("../../helpers/createErrorMessage");
const User = require("../../models/user");

const register = async (req, res, next) => {
  try {
    const response = await User.create(req.body);
    if (!response) {
      throw createErrorMessage(500);
    }
    res.status(201).json({
      user: {
        email: response.email,
        subscription: response.subscription,
      },
    });
  } catch (error) {
    const { status = 500, message = "Internal server error" } = error;
    res.status(status).json({ status, message });
  }
};

module.exports = register;

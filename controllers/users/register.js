const createErrorMessage = require("../../helpers/createErrorMessage");
const User = require("../../models/user");

const register = async (req, res, next) => {
  try {
    const response = await User.create(req.body);
    console.log(response);
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
    res.status(409).json({ message: "Email in use" });
  }
};

module.exports = register;

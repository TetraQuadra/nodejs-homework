const comparePass = require("../../helpers/comparePass");
const createErrorMessage = require("../../helpers/createErrorMessage");
const generateToken = require("../../helpers/generateToken");
const User = require("../../models/user");

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      throw createErrorMessage(401, "Email or password is wrong");
    }

    if (!(await comparePass(req.body.password, user.password))) {
      throw createErrorMessage(401, "Email or password is wrong");
    }
    const token = generateToken(user._id);
    const writeTokenResponse = await User.updateOne(
      { _id: user._id },
      { token }
    );
    if (!writeTokenResponse) {
      throw createErrorMessage(500);
    }
    res.status(200).json({
      token,
      user: {
        email: user.email,
        subscription: user.subscription,
      },
    });
  } catch (error) {
    const { status = 500, message = "Internal server error" } = error;
    res.status(status).json({ status, message });
  }
};

module.exports = login;

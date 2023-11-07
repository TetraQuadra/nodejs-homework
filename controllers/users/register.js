const gravatar = require("gravatar");
const { nanoid } = require("nanoid");
const createErrorMessage = require("../../helpers/createErrorMessage");
const User = require("../../models/user");
const sendEmail = require("../services/email/sendEmail");

const register = async (req, res, next) => {
  try {
    const avatarUrl = await gravatar.url(req.body.email);
    req.body.avatarURL = avatarUrl;
    req.body.verificationToken = nanoid();

    const email = {
      recipient: req.body.email,
      body: `Click <a href="http://${process.env.BASE_URL}api/users/verify/${req.body.verificationToken}">here</a> to verify your email.`,
    };
    sendEmail(email);

    const response = await User.create(req.body);
    if (!response) {
      throw createErrorMessage(500);
    }
    res.status(201).json({
      user: {
        email: response.email,
        subscription: response.subscription,
        avatarUrl: response.avatarUrl,
      },
    });
  } catch (error) {
    const { status = 500, message = "Internal server error" } = error;
    res.status(status).json({ status, message });
  }
};

module.exports = register;

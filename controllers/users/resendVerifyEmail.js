const createErrorMessage = require("../../helpers/createErrorMessage");
const sendEmail = require("../../helpers/sendEmail");
const User = require("../../models/user");

const resendVerifyEmail = async (req, res, next) => {
  try {
    if (!req.body.email) {
      throw createErrorMessage(400);
    }
    const response = await User.findOne({ email: req.body.email });
    if (!response) {
      throw createErrorMessage(404);
    }

    const email = {
      recipient: req.body.email,
      body: `Click <a href="http://${process.env.BASE_URL}api/users/verify/${response.verificationToken}">here</a> to verify your email.`,
    };
    sendEmail(email);

    res.status(200).json({
      message: "Verification email sent",
    });
  } catch (error) {
    const { status = 500, message = "Internal server error" } = error;
    res.status(status).json({ status, message });
  }
};

module.exports = resendVerifyEmail;

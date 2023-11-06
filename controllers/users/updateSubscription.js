const createErrorMessage = require("../../helpers/createErrorMessage");
const User = require("../../models/user");

const typesOfSubscriptions = ["starter", "pro", "business"]; // тайпскрипт бы.......

const updateSubscription = async (req, res, next) => {
  try {
    const subscription = { subscription: req.body.subscription };
    if (!typesOfSubscriptions.includes(req.body.subscription)) {
      throw createErrorMessage(400, "Wrong subscription plan");
    }
    const response = await User.findByIdAndUpdate(
      req.params.userId,
      subscription,
      {
        new: true,
      }
    );
    if (!response) {
      throw createErrorMessage(500);
    }
    res.status(200).json({
      subscription: response.subscription,
    });
  } catch (error) {
    const { status = 500, message = "Internal server error" } = error;
    res.status(status).json({ status, message });
  }
};

module.exports = updateSubscription;

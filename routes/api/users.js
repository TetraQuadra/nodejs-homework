const express = require("express");
const userControllers = require("../../controllers/users/index");
const authenticate = require("../../middleware/authenticate");
const encryptPassword = require("../../middleware/encryptPassword");
const validateData = require("../../middleware/validateData");
const { userSchema } = require("../../schemas/user");

const router = express.Router();

router.post(
  "/register",
  validateData(userSchema),
  encryptPassword,
  userControllers.register
);

router.post("/login", validateData(userSchema), userControllers.login);

router.get("/current", authenticate, userControllers.getCurrent);

router.patch("/:userId/subscription", userControllers.updateSubscription);

module.exports = router;

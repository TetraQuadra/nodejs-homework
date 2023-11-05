const express = require("express");
const contactControllers = require("../../controllers/contacts/index");
const authenticate = require("../../middleware/authenticate");
const validateData = require("../../middleware/validateData");
const { contactSchema, updateFavorite } = require("../../schemas/contact");

const router = express.Router();

router.get("/", authenticate, contactControllers.listContacts);

router.get("/:contactId", authenticate, contactControllers.getContactById);

router.post(
  "/",
  authenticate,
  validateData(contactSchema),
  contactControllers.addContact
);

router.delete("/:contactId", authenticate, contactControllers.removeContact);

router.put(
  "/:contactId",
  authenticate,
  validateData(contactSchema),
  contactControllers.updateContact
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  validateData(updateFavorite),
  contactControllers.updateStatusContact
);

module.exports = router;

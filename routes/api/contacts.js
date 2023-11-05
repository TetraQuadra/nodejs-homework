const express = require("express");
const contactControllers = require("../../controllers/contacts/index");
const validateContact = require("../../middleware/validateContact");
const { contactSchema, updateFavorite } = require("../../schemas/contact");

const router = express.Router();

router.get("/", contactControllers.listContacts);

router.get("/:contactId", contactControllers.getContactById);

router.post("/", validateContact(contactSchema), contactControllers.addContact);

router.delete("/:contactId", contactControllers.removeContact);

router.put(
  "/:contactId",
  validateContact(contactSchema),
  contactControllers.updateContact
);

router.patch(
  "/:contactId/favorite",
  validateContact(updateFavorite),
  contactControllers.updateStatusContact
);

module.exports = router;

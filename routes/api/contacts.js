const express = require("express");
const contactControllers = require("../../controllers/contacts/index");
const validateContact = require("../../middleware/validateContact");
const contactSchema = require("../../schemas/contact");

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

module.exports = router;

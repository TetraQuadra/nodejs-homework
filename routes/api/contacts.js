const express = require("express");
const contactControllers = require("../../controllers/contacts/index");

const router = express.Router();

router.get("/", contactControllers.listContacts);

router.get("/:contactId", contactControllers.getContactById);

router.post("/", contactControllers.addContact);

router.delete("/:contactId", contactControllers.removeContact);

router.put("/:contactId", contactControllers.updateContact);

module.exports = router;

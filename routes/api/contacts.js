const express = require("express");
const addContact = require("../../controllers/addContact");
const getContactById = require("../../controllers/getContactById");
const listContacts = require("../../controllers/listContacts");
const removeContact = require("../../controllers/removeContact");
const updateContact = require("../../controllers/updateContact");
const router = express.Router();

router.get("/", listContacts);

router.get("/:contactId", getContactById);

router.post("/", addContact);

router.delete("/:contactId", removeContact);

router.put("/:contactId", updateContact);

module.exports = router;

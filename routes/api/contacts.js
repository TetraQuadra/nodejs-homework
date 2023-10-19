const express = require("express");
const createErrorMessage = require("../../helpers/createErrorMessage");
const router = express.Router();

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../../models/contacts");

router.get("/", async (req, res, next) => {
  try {
    const body = await listContacts();
    if (!body) {
      throw createErrorMessage(404);
    }
    res.status(200).json(body);
  } catch (error) {
    const { status = 500, message = "Internal server error" } = error;
    res.status(status).json({ status, message });
  }
});

router.get("/:contactId", async (req, res, next) => {
  try {
    const body = await getContactById(req.params.contactId);
    if (!body) {
      throw createErrorMessage(404);
    }
    res.status(200).json(body);
  } catch (error) {
    const { status = 500, message = "Internal server error" } = error;
    res.status(status).json({ status, message });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const response = await addContact(req.body);
    if (!response) {
      throw createErrorMessage(400);
    }
    res.status(201).json(response);
  } catch (error) {
    const { status = 500, message = "Internal server error" } = error;
    res.status(status).json({ status, message });
  }
});

router.delete("/:contactId", async (req, res, next) => {
  try {
    const response = await removeContact(req.params.contactId);
    if (!response) {
      throw createErrorMessage(404);
    }
    res.status(200).json({ message: "contact deleted" });
  } catch (error) {
    const { status = 500, message = "Internal server error" } = error;
    res.status(status).json({ status, message });
  }
});

router.put("/:contactId", async (req, res, next) => {
  try {
    const response = await updateContact(req.params.contactId, req.body);
    if (!response) {
      throw createErrorMessage(400);
    }
    res.status(201).json(response);
  } catch (error) {
    const { status = 500, message = "Internal server error" } = error;
    res.status(status).json({ status, message });
  }
});

module.exports = router;

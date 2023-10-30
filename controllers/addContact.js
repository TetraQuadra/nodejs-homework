const createErrorMessage = require("../helpers/createErrorMessage");

const contacts = require("../models/contacts");

const addContact = async (req, res, next) => {
  try {
    const response = await contacts.addContact(req.body);
    if (!response) {
      throw createErrorMessage(400);
    }
    res.status(201).json(response);
  } catch (error) {
    const { status = 500, message = "Internal server error" } = error;
    res.status(status).json({ status, message });
  }
};

module.exports = addContact;

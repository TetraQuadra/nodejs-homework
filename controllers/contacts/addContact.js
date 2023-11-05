const createErrorMessage = require("../../helpers/createErrorMessage");
const Contact = require("../../models/contact");

const addContact = async (req, res, next) => {
  try {
    const response = await Contact.create(req.body);
    if (!response) {
      throw createErrorMessage(500);
    }
    res.status(201).json(response);
  } catch (error) {
    const { status = 500, message = "Internal server error" } = error;
    res.status(status).json({ status, message });
  }
};

module.exports = addContact;

const createErrorMessage = require("../helpers/createErrorMessage");

const contacts = require("../models/contacts");

const getContactById = async (req, res, next) => {
  try {
    const body = await contacts.getContactById(req.params.contactId);
    if (!body) {
      throw createErrorMessage(404);
    }
    res.status(200).json(body);
  } catch (error) {
    const { status = 500, message = "Internal server error" } = error;
    res.status(status).json({ status, message });
  }
};

module.exports = getContactById;

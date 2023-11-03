const createErrorMessage = require("../../helpers/createErrorMessage");

const contacts = require("../../models/contacts");

const removeContact = async (req, res, next) => {
  try {
    const response = await contacts.removeContact(req.params.contactId);
    if (!response) {
      throw createErrorMessage(404);
    }
    res.status(200).json({ message: "contact deleted" });
  } catch (error) {
    const { status = 500, message = "Internal server error" } = error;
    res.status(status).json({ status, message });
  }
};

module.exports = removeContact;

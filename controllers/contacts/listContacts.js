const contacts = require("../../models/contacts");
const listContacts = async (req, res, next) => {
  try {
    const body = await contacts.listContacts();
    res.status(200).json(body);
  } catch (error) {
    const { status = 500, message = "Internal server error" } = error;
    res.status(status).json({ status, message });
  }
};

module.exports = listContacts;

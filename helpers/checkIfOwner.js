const Contact = require("../models/contact");
const createErrorMessage = require("./createErrorMessage");

const checkIfOwner = async (req) => {
  const contact = await Contact.findById(req.params.contactId);
  if (!contact.owner.equals(req.user)) {
    throw createErrorMessage(403);
  }
  return true;
};

module.exports = checkIfOwner;

const createErrorMessage = require("./createErrorMessage");

const checkForDuplicate = (contacts, contact) => {
  for (const existingContact of contacts) {
    if (
      existingContact.name === contact.name &&
      existingContact.email === contact.email &&
      existingContact.phone === contact.phone
    ) {
      throw createErrorMessage(400, "Contact already exists");
    }
  }
};

module.exports = checkForDuplicate;

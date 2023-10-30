const createErrorMessage = require("./createErrorMessage");

const validateContact = ({ name, email, phone }) => {
  const namePattern = /^[A-Za-z\s]+$/;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/;
  const invalidFields = [];

  if (!namePattern.test(name)) {
    invalidFields.push("Name is not valid");
  }

  if (!emailPattern.test(email)) {
    invalidFields.push("Email is not valid.");
  }

  if (!phonePattern.test(phone)) {
    invalidFields.push("Phone is not valid.");
  }

  if (invalidFields.length > 0) {
    throw createErrorMessage(400, invalidFields.join("\n"));
  }
};

module.exports = validateContact;

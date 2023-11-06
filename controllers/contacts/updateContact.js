const checkIfOwner = require("../../helpers/checkIfOwner");
const createErrorMessage = require("../../helpers/createErrorMessage");
const Contact = require("../../models/contact");

const updateContact = async (req, res, next) => {
  try {
    await checkIfOwner(req);
    const response = await Contact.findByIdAndUpdate(
      req.params.contactId,
      req.body,
      {
        new: true,
      }
    );
    if (!response) {
      throw createErrorMessage(400);
    }
    res.status(201).json(response);
  } catch (error) {
    const { status = 500, message = "Internal server error" } = error;
    res.status(status).json({ status, message });
  }
};

module.exports = updateContact;

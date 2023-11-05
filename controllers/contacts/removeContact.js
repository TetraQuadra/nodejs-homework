const checkIfOwner = require("../../helpers/checkIfOwner");
const createErrorMessage = require("../../helpers/createErrorMessage");
const Contact = require("../../models/contact");

const removeContact = async (req, res, next) => {
  try {
    await checkIfOwner(req);
    const response = await Contact.findByIdAndDelete(req.params.contactId);
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

const createErrorMessage = require("../../helpers/createErrorMessage");
const Contact = require("../../models/contact");

const getContactById = async (req, res, next) => {
  try {
    const body = await Contact.findById(req.params.contactId);
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

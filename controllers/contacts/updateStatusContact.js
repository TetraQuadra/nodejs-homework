const checkIfOwner = require("../../helpers/checkIfOwner");
const createErrorMessage = require("../../helpers/createErrorMessage");
const Contact = require("../../models/contact");

const updateStatusContact = async (req, res, next) => {
  try {
    await checkIfOwner(req);
    const favorite = { favorite: req.body.favorite };
    const response = await Contact.findByIdAndUpdate(
      req.params.contactId,
      favorite,
      {
        new: true,
      }
    );
    console.log(response);
    if (!response) {
      throw createErrorMessage(404);
    }
    res.status(201).json(response);
  } catch (error) {
    const { status = 500, message = "Internal server error" } = error;
    res.status(status).json({ status, message });
  }
};

module.exports = updateStatusContact;

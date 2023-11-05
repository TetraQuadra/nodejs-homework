const Contact = require("../../models/contact");
const listContacts = async (req, res, next) => {
  try {
    console.log(req.body);
    const body = await Contact.find({ owner: req.user }).exec();
    res.status(200).json(body);
  } catch (error) {
    const { status = 500, message = "Internal server error" } = error;
    res.status(status).json({ status, message });
  }
};

module.exports = listContacts;

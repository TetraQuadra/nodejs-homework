const Contact = require("../../models/contact");

const listContacts = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    const query = {
      owner: req.user,
    };

    if (req.query.favorite === "true") {
      query.favorite = true;
    }

    const contacts = await Contact.find(query).skip(skip).limit(limit).exec();

    res.status(200).json(contacts);
  } catch (error) {
    const { status = 500, message = "Internal server error" } = error;
    res.status(status).json({ status, message });
  }
};

module.exports = listContacts;

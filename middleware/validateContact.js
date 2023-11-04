const validateContact = (addSchema) => {
  return (req, res, next) => {
    const { error } = addSchema.validate(req.body);

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      throw res.status(400).json({ message: "Invalid fields" });
    }

    if (error) {
      error.status = 400;
      error.message = `Invalid fields ${error.details[0].context.label}`;
      next(error);
    } else {
      next();
    }
  };
};

module.exports = validateContact;

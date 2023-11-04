const joi = require("joi");

const contactSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  phone: joi
    .string()
    .pattern(/^[0-9() -]+$/)
    .required(),
});

module.exports = contactSchema;

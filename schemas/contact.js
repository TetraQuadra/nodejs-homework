const joi = require("joi");

const contactSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  phone: joi
    .string()
    .pattern(/^[0-9() -]+$/)
    .required(),
  favorite: joi.boolean(),
});

const updateFavorite = joi.object({
  favorite: joi.bool().required(),
});

module.exports = { contactSchema, updateFavorite };

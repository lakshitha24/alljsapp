import Joi from "joi";
const itemSchemaValidation = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  number: Joi.string(),
  gender: Joi.string(),
  photo: Joi.string(),
});

const empIdValidation = Joi.object({
  id : Joi.string().hex().length(24),
});

const itemValidation = Joi.array().items(itemSchemaValidation);

export { itemValidation, itemSchemaValidation, empIdValidation };

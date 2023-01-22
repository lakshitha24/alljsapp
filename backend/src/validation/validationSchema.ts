import Joi from "joi";
const itemSchemaValidation = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  number: Joi.string(),
  gender: Joi.string(),
  photo: Joi.string(),
});


const itemUpdateSchemaValidation = Joi.object({
  _id:Joi.string(),
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  number: Joi.string(),
  gender: Joi.string(),
  photo: Joi.string(),
});

const itemValidation = Joi.array().items(itemSchemaValidation);

export { itemValidation, itemSchemaValidation,itemUpdateSchemaValidation };

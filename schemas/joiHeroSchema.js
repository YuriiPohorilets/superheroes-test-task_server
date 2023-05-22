const Joi = require('joi');

const joiHeroSchema = Joi.object({
  nickname: Joi.string().required(),
  realName: Joi.string().required(),
  originDescription: Joi.string().required(),
  superpowers: Joi.array().items(Joi.string()).required(),
  catchPhrase: Joi.array().items(Joi.string()).required(),
  images: Joi.string(),
});

module.exports = joiHeroSchema;

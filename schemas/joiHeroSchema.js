const Joi = require('joi');

const joiHeroSchema = Joi.object({
  nickname: Joi.string().required(),
  realName: Joi.string().required(),
  originDescription: Joi.string().required(),
  superpowers: Joi.string().required(),
  catchPhrase: Joi.string().required(),
  images: Joi.string().required(),
});

module.exports = joiHeroSchema;

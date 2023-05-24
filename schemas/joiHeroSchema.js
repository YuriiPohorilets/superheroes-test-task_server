const Joi = require('joi');

const joiHeroSchema = Joi.object({
  nickname: Joi.string().min(2).max(64).required(),
  realName: Joi.string().min(2).max(64),
  originDescription: Joi.string().min(6).required(),
  superpowers: Joi.array().items(Joi.string().min(2)).required(),
  catchPhrase: Joi.array().items(Joi.string().min(2)).required(),
  images: Joi.array().items(Joi.string()),
});

module.exports = joiHeroSchema;

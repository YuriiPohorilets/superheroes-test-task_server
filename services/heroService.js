const cloudinary = require('cloudinary').v2;
const { Hero } = require('../models');

const getAllHeroes = async (page, limit) => {
  const skip = (page - 1) * limit;

  const heroes = await Hero.find({}, ' ', {
    skip,
    limit: Number(limit),
  }).sort({ createdAt: -1 });

  return heroes;
};

const getTotalHits = async () => {
  const heroes = await Hero.find({});

  return heroes.length;
};

const getHeroById = async _id => {
  const hero = await Hero.findById({ _id });

  return hero;
};

const createNewHero = async ({
  nickname,
  realName,
  originDescription,
  superpowers,
  catchPhrase,
  images,
}) => {
  const newHero = await new Hero({
    nickname,
    realName,
    originDescription,
    superpowers,
    catchPhrase,
    images,
  });
  await newHero.save();

  return newHero;
};

const deleteHeroById = async _id => {
  const deletedHero = await Hero.findByIdAndRemove({ _id });

  return deletedHero;
};

const updateHeroById = async (
  _id,
  { nickname, realName, originDescription, superpowers, catchPhrase }
) => {
  const updatedHero = await Hero.findByIdAndUpdate(
    _id,
    {
      $set: { nickname, realName, originDescription, superpowers, catchPhrase },
    },
    { new: true }
  );

  return updatedHero;
};

const findHeroByName = async nickname => {
  const hero = await Hero.findOne({ nickname });

  return hero;
};

const deleteImage = async imgId => {
  const result = await cloudinary.uploader.destroy(imgId);

  return result;
};

module.exports = {
  getAllHeroes,
  getTotalHits,
  getHeroById,
  createNewHero,
  deleteHeroById,
  updateHeroById,
  findHeroByName,
  deleteImage,
};

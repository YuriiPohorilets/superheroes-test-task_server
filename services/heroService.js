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
  { nickname, realName, originDescription, superpowers, catchPhrase, images }
) => {
  const updatedHero = await Hero.findByIdAndUpdate(
    _id,
    {
      $set: {
        nickname,
        realName,
        originDescription,
        superpowers,
        catchPhrase,
        images,
      },
    },
    { new: true }
  );

  return updatedHero;
};

const getHeroByName = async nickname => {
  const hero = await Hero.findOne({ nickname });

  return hero;
};

const deleteHeroImage = async (_id, images) => {
  const updatedImages = await Hero.findByIdAndUpdate(
    _id,
    {
      $set: {
        images,
      },
    },

    { new: true }
  );

  return updatedImages;
};

module.exports = {
  getAllHeroes,
  getTotalHits,
  getHeroById,
  createNewHero,
  deleteHeroById,
  updateHeroById,
  getHeroByName,
  deleteHeroImage,
};

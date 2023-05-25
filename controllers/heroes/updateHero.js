const asyncHandler = require('express-async-handler');
const { joiHeroSchema } = require('../../schemas');
const { updateHeroById } = require('../../services/heroService');

const updateHero = asyncHandler(async (req, res) => {
  const { error } = joiHeroSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  const { heroId } = req.params;
  const hero = req.body;
  const images = req.files;

  const imageUrls = [];

  if (images) {
    images.forEach(({ path }) => imageUrls.push(path));
  }

  const updatedHero = await updateHeroById(heroId, hero);

  !updatedHero
    ? res.status(404).json({ message: 'Hero not found' })
    : res.status(200).json(updatedHero);
});

module.exports = updateHero;

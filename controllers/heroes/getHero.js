const asyncHandler = require('express-async-handler');
const { getHeroById } = require('../../services/heroService');

const getHero = asyncHandler(async (req, res) => {
  const { heroId } = req.params;

  const hero = await getHeroById(heroId);

  !hero
    ? res.status(404).json({ message: `Hero not found` })
    : res.status(200).json(hero);
});

module.exports = getHero;

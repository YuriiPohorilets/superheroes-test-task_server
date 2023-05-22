const asyncHandler = require('express-async-handler');
const { deleteHeroById } = require('../../services/heroService');

const deleteHero = asyncHandler(async (req, res) => {
  const { heroId } = req.params;

  const deletedHero = await deleteHeroById(heroId);

  !deletedHero
    ? res.status(404).json({ message: 'Hero not found' })
    : res.status(201).json({ message: 'Hero successfully deleted' });
});

module.exports = deleteHero;

const asyncHandler = require('express-async-handler');
const { getAllHeroes, getTotalHits } = require('../../services/heroService');

const getHeroes = asyncHandler(async (req, res) => {
  const { page = 1, limit = 5 } = req.query;

  const heroes = await getAllHeroes(page, limit);
  const totalHits = await getTotalHits();

  res.status(200).json({ totalHits, heroes });
});

module.exports = getHeroes;

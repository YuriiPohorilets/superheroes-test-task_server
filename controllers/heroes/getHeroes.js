const asyncHandler = require('express-async-handler');
const { getAllHeroes } = require('../../services/heroService');

const getHeroes = asyncHandler(async (req, res) => {
  const { page = 1, limit = 5 } = req.query;

  const heroes = await getAllHeroes(page, limit);

  res.status(200).json(heroes);
});

module.exports = getHeroes;

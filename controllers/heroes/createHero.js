const asyncHandler = require('express-async-handler');
const { joiHeroSchema } = require('../../schemas');
const { createNewHero, getHeroByName } = require('../../services/heroService');

const createHero = asyncHandler(async (req, res) => {
  const { error } = joiHeroSchema.validate(req.body);
  if (error) {
    console.log(error);
    return res.status(400).json({ message: 'Missing fields' });
  }

  const { nickname, realName, originDescription, superpowers, catchPhrase } =
    req.body;
  const images = req.files;

  const hero = await getHeroByName(nickname);
  const imageUrls = [];

  if (images) {
    images.forEach(({ path }) => imageUrls.push(path));
  }

  if (hero) {
    return res
      .status(409)
      .json({ message: `Hero with nickname: ${nickname} already exists` });
  }

  const newHero = await createNewHero({
    nickname,
    realName,
    originDescription,
    superpowers,
    catchPhrase,
    images: imageUrls,
  });

  res.status(201).json(newHero);
});

module.exports = createHero;

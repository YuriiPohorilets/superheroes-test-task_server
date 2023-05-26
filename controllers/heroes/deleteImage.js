const asyncHandler = require('express-async-handler');
const { deleteHeroImage, getHeroById } = require('../../services/heroService');

const deleteImage = asyncHandler(async (req, res) => {
  const { heroId } = req.params;
  const { imageUrl } = req.body;

  const { images } = await getHeroById(heroId);

  const filterImages = images.filter(image => image !== imageUrl);

  const { images: updatedImages } = await deleteHeroImage(heroId, filterImages);
  console.log(filterImages);
  !updatedImages
    ? res.status(404).json({ message: 'Images not found' })
    : res.status(200).json(updatedImages);
});

module.exports = deleteImage;

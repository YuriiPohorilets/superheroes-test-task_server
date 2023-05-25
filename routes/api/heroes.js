const express = require('express');
const router = express.Router();
const { heroes: ctrl } = require('../../controllers');
const { upload } = require('../../middleware');

router.get('/', ctrl.getHeroes);

router.get('/:heroId', ctrl.getHero);

router.post('/', upload.any(), ctrl.createHero);

router.patch('/:heroId', upload.any(), ctrl.updateHero);

router.patch('/images/:heroId', ctrl.deleteImage);

router.delete('/:heroId', ctrl.deleteHero);

module.exports = router;

const express = require('express');
const router = express.Router();
const { heroes: ctrl } = require('../../controllers');
const { upload } = require('../../middleware');

router.get('/', ctrl.getHeroes);

router.get('/:heroId', ctrl.getHeroById);

router.post('/', upload.array('images', 6), ctrl.createHero);

router.patch('/:heroId', upload.array('images', 6), ctrl.updateHero);

router.delete('/:heroId', ctrl.deleteHero);

module.exports = router;

const express = require('express');
const router = express.Router();
const { heroes: ctrl } = require('../../controllers');
const { upload } = require('../../middleware');

router.get('/', ctrl.getHeroes);

router.get('/:heroId', ctrl.getHero);

router.post('/', upload.array('images', 12), ctrl.createHero);

router.patch('/:heroId', upload.array('images', 12), ctrl.updateHero);

router.delete('/:heroId', ctrl.deleteHero);

module.exports = router;

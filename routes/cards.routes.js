const express = require('express');
const router = express.Router();
const uploader = require('../configs/storage.config');

const cardsController = require('../controllers/cards.controller');

router.get('/', cardsController.list);
router.post('/', uploader.single('attachment'), cardsController.create);
router.get('/:id', cardsController.get);
router.put('/:id', uploader.single('attachment'), cardsController.update);
router.delete('/:id', cardsController.delete);

module.exports = router;

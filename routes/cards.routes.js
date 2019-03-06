const express = require('express');
const router = express.Router();

const cardsController = require('../controllers/cards.controller');

router.get('/', cardsController.list);
router.post('/', cardsController.create);
router.get('/:id', cardsController.get);
router.put('/:id', cardsController.update);
router.delete('/:id', cardsController.delete);

module.exports = router;

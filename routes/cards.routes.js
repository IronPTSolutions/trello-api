const express = require('express');
const router = express.Router();

const uploader = require('../configs/storage.config');
const secure = require('../middlewares/secure.mid');
const cardsController = require('../controllers/cards.controller');

router.get('/', secure.isAuthenticated, cardsController.list);
router.post('/', secure.isAuthenticated, uploader.single('attachment'), cardsController.create);
router.get('/:id', secure.isAuthenticated, cardsController.get);
router.put('/:id', secure.isAuthenticated, uploader.single('attachment'), cardsController.update);
router.delete('/:id', secure.isAuthenticated, cardsController.delete);

module.exports = router;

const express = require('express');
const router = express.Router();

const secure = require('../middlewares/secure.mid');
const columnsController = require('../controllers/columns.controller');

router.get('/', secure.isAuthenticated, columnsController.list);
router.post('/', secure.isAuthenticated, columnsController.create);
router.get('/:id', secure.isAuthenticated, columnsController.get);
router.put('/:id', secure.isAuthenticated, columnsController.update);
router.delete('/:id', secure.isAuthenticated, columnsController.delete);

module.exports = router;

const express = require('express');
const router = express.Router();

const columnsController = require('../controllers/columns.controller');

router.get('/', columnsController.list);
router.post('/', columnsController.create);
router.get('/:id', columnsController.get);
router.put('/:id', columnsController.update);
router.delete('/:id', columnsController.delete);

module.exports = router;

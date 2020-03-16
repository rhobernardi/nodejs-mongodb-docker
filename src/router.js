const express = require('express');
const router = express.Router();
const ModelController = require('./controllers/ModelController');
require('./database/config');

router.get('/:model', ModelController.index);
router.get('/:model/:id', ModelController.show);
router.post('/:model', ModelController.store);
router.patch('/:model/:id', ModelController.update);
router.delete('/:model/:id', ModelController.destroy);

module.exports = router;

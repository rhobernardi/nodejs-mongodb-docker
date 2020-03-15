const express = require('express');
const router = express.Router();
const ProductController = require('./controllers/ProductController');
require('./database/config');

router.get('/products', ProductController.index);
router.get('/products/:id', ProductController.show);
router.post('/products', ProductController.store);
router.patch('/products/:id', ProductController.update);
router.delete('/products/:id', ProductController.destroy);

module.exports = router;

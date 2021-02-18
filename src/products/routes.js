const express = require('express');
const router = express.Router();

const {getProduct, createProduct, deleteProduct} = require('./controllers');

// Router middleware to handle auth routes.
router.route('/product/:id').get(getProduct);
router.route('/product').post(createProduct);
router.route('/product/:id').delete(deleteProduct);

// Export router
module.exports = router;

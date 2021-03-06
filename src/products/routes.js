const express = require('express');
const router = express.Router();

const {
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
} = require('./controllers');

// Router middleware to handle auth routes.
router.route('/product/:id').get(getProduct);
router.route('/product').post(createProduct);
router.route('/product/:id').delete(deleteProduct);
router.route('/product').put(updateProduct);
router.route('/products').get(getAllProducts);

// Export router
module.exports = router;

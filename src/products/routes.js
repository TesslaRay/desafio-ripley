const express = require("express");
const router = express.Router();

const { getProduct } = require("./controllers");

// Router middleware to handle auth routes.
router.route("/product/:id").get(getProduct);

// Export router
module.exports = router;

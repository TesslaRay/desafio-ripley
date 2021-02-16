const express = require("express");
const app = express();

// ----- Import all routes here -----
const productsRoutes = require("./products/routes");

// ----- Use all routes here -----
app.use(productsRoutes);

// Export main router to use it in the main app.
module.exports = app;

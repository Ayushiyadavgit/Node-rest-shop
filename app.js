const express = require("express");
const app = express();

const productRoutes = require("./api/routes/Products");
app.use("/Products", productRoutes);

module.exports = app;

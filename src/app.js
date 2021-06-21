const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const cors = require("cors");
const logger = require("./config/logger");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const subscribeRouter = require("./subscribe/subscribe.router");
const checkoutRouter = require("./checkout/checkout.router");

const app = express();
``;
app.use(logger);
app.use(cors());
app.use(express.json());

app.use("/subscribe", subscribeRouter);
app.use("/checkout", checkoutRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;

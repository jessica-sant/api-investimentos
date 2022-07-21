require('express-async-errors');
const express = require('express');
const handleError = require('./middlewares/handleError');
const routes = require('./Routes');
const app = express();

app.use(express.json());
app.use(routes);
app.use(handleError);

module.exports = app;
require('express-async-errors');
const express = require('express');
const handleError = require('./middlewares/handleError')

const app = express();

app.use(express.json());

app.use(handleError)

module.exports = app;
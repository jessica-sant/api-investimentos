require('express-async-errors');
const express = require('express');
const handleError = require('./middlewares/handleError')

const app = express();

app.use(express.json());

app.get('/', (_req, res) => res.status(200).json('deu certo'))
app.use(handleError)

module.exports = app;
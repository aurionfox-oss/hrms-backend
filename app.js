require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const routes = require('./src/routes');
const { notFound, errorHandler } = require('./src/middleware/errorHandler');
const responseFormatter = require('./src/middleware/responseFormatter');

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(responseFormatter());

app.use('/api', routes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;


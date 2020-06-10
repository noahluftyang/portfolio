const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');

const { router } = require('./routes');

const app = express();

app.use(helmet());
app.use(cors());
app.use(logger('tiny'));
app.use(router);

exports.app = app;

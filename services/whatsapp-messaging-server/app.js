const cors = require('@koa/cors');
const Koa = require('koa');
const helmet = require('koa-helmet');
const logger = require('koa-logger');

const app = new Koa();

app.use(helmet());
app.use(cors());
app.use(logger());

exports.app = app;

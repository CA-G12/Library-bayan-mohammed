const { join } = require('path');

const express = require('express');
const compression = require('compression');

const router = require('./routes');

const app = express();
app.set('port', 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(express.static(join(__dirname, '..', 'public')));
app.use(router);
module.exports = app;
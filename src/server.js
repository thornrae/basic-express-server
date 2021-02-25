'use strict';

const express = require('express');
const app = express();
const logger = require('./middleware/logger.js');
const errors = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');

app.use(express.json());
app.use(logger);

app.get('/person', (req, res) => {
  console.log('name', req.query.name);
  res.status(200).send(`name: ${req.query.name}`);
});

app.use('*', notFound);
app.use(errors);


module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => {
      console.log(`listening: ${port}`);
    });
  }
};



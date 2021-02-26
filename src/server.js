'use strict';

const express = require('express');
const app = express();
const logger = require('./middleware/logger.js');
const errors = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');
const validator = require('./middleware/validator.js');

app.use(express.json());
app.use(logger);
// app.use(validator);

app.get('/person', validator, (req, res) => {
  // console.log('name:', req.query.name);
  let name = req.query.name;
  res.status(200).json({ name: name});
  // app.use(validator);

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



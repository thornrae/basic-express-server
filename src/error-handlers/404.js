'use strict';

module.exports = (req, res, next) => {
  res.status(400).json({status: 404, message: 'not found'});
};

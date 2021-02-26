// Checks the query string for a name property


// Sends the request through when valid, forces an error when not

const validator = (req, res, next) => {
  if (req.query.name){
    next();
  } else {
    next('name not provided');
  }
};

module.exports = validator;

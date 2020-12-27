const makeCheckError = require('./check_error');
const ObjectId = require('mongoose').Types.ObjectId;

const checkError = makeCheckError(ObjectId);

module.exports = checkError;
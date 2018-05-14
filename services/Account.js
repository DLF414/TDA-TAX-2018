const CrudService  = require('./crud');

module.exports =  class Account extends CrudService {
  constructor (context, errors) {
    super(context, errors);
  }
};

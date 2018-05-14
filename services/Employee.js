const CrudService  = require('./crud');

module.exports =  class Employee extends CrudService {
  constructor (context, errors) {
    super(context, errors);
  }
};

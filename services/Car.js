const  CrudService = require('./crud');


module.exports =  class Car extends CrudService {
  constructor (context, errors) {
    super(context,  errors);
  }
};

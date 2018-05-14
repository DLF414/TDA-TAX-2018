const CrudService  = require('./crud');

module.exports =  class Order extends CrudService {
  constructor (context, errors) {
    super(context, errors);
  }
};

const CrudService  = require('./crud');

module.exports =  class Client extends CrudService {
  constructor (context, errors) {
    super(context, errors);
  }

};

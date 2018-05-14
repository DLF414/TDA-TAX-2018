'use strict';
var dataProvider = require('../../data/accounts/{id}.js');
/**
 * Operations on /accounts/{id}
 */
module.exports = {
    /**
     * summary: Get account by id
     * description: 
     * parameters: id
     * produces: 
     * responses: 200, 404, 500
     */
    get: function (req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    },
    /**
     * summary: Update account
     * description: 
     * parameters: id, body
     * produces: 
     * responses: 200, 500
     */
    put: function (req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['put']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};

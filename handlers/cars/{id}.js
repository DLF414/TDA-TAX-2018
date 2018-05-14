'use strict';
var dataProvider = require('../../data/cars/{id}.js');
/**
 * Operations on /cars/{id}
 */
module.exports = {
    /**
     * summary: Get car by id
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
     * summary: Car updating
     * description: 
     * parameters: id, body
     * produces: 
     * responses: 201, 500
     */
    put: function (req, res, next) {
        /**
         * Get the data for response 201
         * For response `default` status 200 is used.
         */
        var status = 201;
        var provider = dataProvider['put']['201'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};

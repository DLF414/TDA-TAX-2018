'use strict';
var Mockgen = require('../mockgen.js');
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
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/accounts/{id}',
                operation: 'get',
                response: '200'
            }, callback);
        },
        404: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/accounts/{id}',
                operation: 'get',
                response: '404'
            }, callback);
        },
        500: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/accounts/{id}',
                operation: 'get',
                response: '500'
            }, callback);
        }
    },
    /**
     * summary: Update account
     * description: 
     * parameters: id, body
     * produces: 
     * responses: 200, 500
     * operationId: 
     */
    put: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/accounts/{id}',
                operation: 'put',
                response: '200'
            }, callback);
        },
        500: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/accounts/{id}',
                operation: 'put',
                response: '500'
            }, callback);
        }
    }
};

'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /orders
 */
module.exports = {
    /**
     * summary: Get orers
     * description: 
     * parameters: limit, offset, accepted, clientid, acceptedBy
     * produces: 
     * responses: 200, 500
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/orders',
                operation: 'get',
                response: '200'
            }, callback);
        },
        500: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/orders',
                operation: 'get',
                response: '500'
            }, callback);
        }
    },
    /**
     * summary: Create order
     * description: 
     * parameters: body
     * produces: 
     * responses: 201, 409, 500
     * operationId: 
     */
    post: {
        201: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/orders',
                operation: 'post',
                response: '201'
            }, callback);
        },
        409: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/orders',
                operation: 'post',
                response: '409'
            }, callback);
        },
        500: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/orders',
                operation: 'post',
                response: '500'
            }, callback);
        }
    }
};

'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /employee
 */
module.exports = {
    /**
     * summary: Get employees
     * description: 
     * parameters: limit, offset
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
                path: '/employee',
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
                path: '/employee',
                operation: 'get',
                response: '500'
            }, callback);
        }
    },
    /**
     * summary: Create employee
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
                path: '/employee',
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
                path: '/employee',
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
                path: '/employee',
                operation: 'post',
                response: '500'
            }, callback);
        }
    }
};

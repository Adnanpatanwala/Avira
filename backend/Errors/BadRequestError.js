const CustomErrorApi = require('./CustomapiError');
const {StatusCodes} = require('http-status-codes');
class BadRequestError extends CustomErrorApi{
    constructor(message){
        super(message)
        this.statusCodes = StatusCodes.BAD_REQUEST;
    }
}

module.exports = BadRequestError;
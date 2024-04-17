const CustomErrorApi = require('./CustomapiError');
const {StatusCodes} = require('http-status-codes');
class NotFoundError extends CustomErrorApi{
    constructor(message){
        super(message)
        this.statusCodes = StatusCodes.NOT_FOUND;
    }
}

module.exports = NotFoundError;
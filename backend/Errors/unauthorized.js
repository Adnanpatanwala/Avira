const CustomErrorApi = require('./CustomapiError');
const {StatusCodes} = require('http-status-codes');
class unauthorized extends CustomErrorApi{
    constructor(message){
        super(message)
        this.statusCodes = StatusCodes.UNAUTHORIZED;
    }
}

module.exports = unauthorized;
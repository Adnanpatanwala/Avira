const CustomErrorApi = require('./CustomapiError');
const {StatusCodes} = require('http-status-codes');
class Unauthenticated extends CustomErrorApi{
    constructor(message){
        super(message)
        this.statusCodes = StatusCodes.FORBIDDEN;
    }
}

module.exports = Unauthenticated;
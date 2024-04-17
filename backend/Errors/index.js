const NotFoundError = require('./NotFoundError')
const BadRequestError = require('./BadRequestError')
const Unauthenticated = require('./Unauthentivated')
const unauthorized = require('./unauthorized')

module.exports = {
    NotFoundError,
    BadRequestError,
    unauthorized,
    Unauthenticated    
}
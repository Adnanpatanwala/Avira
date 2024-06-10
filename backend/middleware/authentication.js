const {VerifyToken} = require('../utils/jwt');
const TokenSchema = require('../models/Token');
const custError = require('../Errors/index');
const {CreateCookies} = require('../utils/jwt');
const { StatusCodes } = require('http-status-codes');

const authenticate = async(req,res,next)=>{
    
    try { 
        const {refreshToken,accessToken} = req.signedCookies;
        
        if(!refreshToken && !accessToken){
            throw new custError.NotFoundError('no access token ans refresh token is provided');
        }
         
        if(accessToken){
            const payload = VerifyToken(accessToken);
            req.user = payload.payload; 
            return next();
        }
        const payload = VerifyToken(refreshToken);
        
        const check = await TokenSchema.findOne({refreshToken:payload.refreshToken, user:payload.payload.id}); 
        if(!check || !check?.isValid){
            throw new custError.Unauthenticated('unauthenticated');
        }       
        const users  = {name:payload.payload.name,id:payload.payload.id,role:payload.payload.role}
        CreateCookies({res,user:users,refreshToken:check.refreshToken});
        req.user = payload.payload;
       
        next(); 
    } catch (error) { 
        console.log(error);
        throw new custError.Unauthenticated('unauthenticated'); 
    }
}

const authorized =(...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
            throw new custError.unauthorized('not authorized to use this route');
        } 
        next();

    }
}

module.exports = {authenticate,authorized}
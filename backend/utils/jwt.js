const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');

const createJwt = (payload)=>{
    return  jwt.sign(payload,process.env.JWT_SECRET);
}

const VerifyToken = (token)=>{
    return jwt.verify(token,process.env.JWT_SECRET);
}


const CreateCookies =({res,user,refreshToken})=>{
    const accessToken = createJwt({payload : user});
    const refreshTokens = createJwt({payload:user,refreshToken});
    const oneday=1000;
    const longer = 1000*60*60*24*30;

    res.cookie('accessToken',accessToken,{
        httpOnly:true,
        secure: process.env.NODE_ENV === 'production',
        signed:true,
        expires: new Date(Date.now() + oneday),
    });
    res.cookie('refreshToken',refreshTokens,{
        secure:process.env.NODE_ENV=='production',
        httpOnly:true,
        signed:true,
        expires: new Date(Date.now()+longer),
    }) 
    res.status(StatusCodes.OK).json({user,accessToken:accessToken,refreshToken:refreshTokens});
}
module.exports = {createJwt,VerifyToken,CreateCookies}
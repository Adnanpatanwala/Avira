const UserSchema = require('../models/User')
const custError = require('../Errors');
const crypto = require('crypto');
const sendVerificationEmail = require('../utils/sendVerifivationEmail');
const { StatusCodes } = require('http-status-codes');
const {CreateCookies}= require('../utils/jwt');
const CreateTokenUser = require('../utils/CreateUser');
const TokenSchema = require('../models/Token')
const {sentOtp}  = require('./verifyOtp');
const { log } = require('console');
 
const registerUser = async(req,res)=>{
    const {phoneno,firstname} = req.body;
    const finduser = await UserSchema.findOne({phoneno});
 
    if(finduser){
        throw new custError.BadRequestError('user alread present');
    } 
    
    const verificationToken = crypto.randomBytes(40).toString('hex');
    await UserSchema.create({...req.body,verificationToken:verificationToken});
    await sentOtp(phoneno); 
    res.status(StatusCodes.CREATED).json(`${firstname} OTP sent successfully` );
}

const veifyToken = async(req,res)=>{
    const {name,email,verificationToken} = req.body;
    const user = await UserSchema.findOne({email});
    if(!user)throw new custError.Unauthenticated('user doesn\'exists');
    if(user.verificationToken!==verificationToken){
        if(!user)throw new custError.Unauthenticated('user doesn\'exists');
    }
    user.verifiedDate = Date.now();
    user.isEmailVerified = true;
    user.verificationToken = '';
    await user.save();
    res.status(StatusCodes.OK).json(`${name} you are successfully verified`);
}

const isValidPhoneNumber = (phoneNumber) => { 
    const phoneRegex = /^\+?\d{1,}$/;
    return phoneRegex.test(phoneNumber);
  };

const Login = async(req,res)=>{
    
    const {email:emailOrphoneno,password} = req.body;
 
    if(!emailOrphoneno || !password){
        throw new custError.BadRequestError('enter the email');
    } 
    
    const mode =  isValidPhoneNumber(emailOrphoneno)?"phoneno":"email";
    const user = await UserSchema.findOne({[mode]:emailOrphoneno});
 
    
    if(!user){
        throw new custError.BadRequestError('No user found');
    } 
    if(mode==="email" && !user.isEmailVerified) throw new custError.BadRequestError('email is not verified');
    if(mode==="phoneno" && !user.isPhonenoVerified) throw new custError.BadRequestError('phone is not verified');
    const checkPassword = await user.comparePassword(password); 
    if(!checkPassword)throw new custError.Unauthenticated('password doesnt match');
    
    const tokenuser = CreateTokenUser(user);
    const existingtoken = await TokenSchema.findOne({user: user._id});
    if(existingtoken){
        const {isValid} = existingtoken;
        if(!isValid) throw custError.Unauthenticated('Invalid crendentials');
        CreateCookies({res,user:tokenuser, refreshToken: existingtoken.refreshToken});
        res.status(StatusCodes.OK).json({user:tokenuser});
    return;
}

    let refreshtoken = "";
    refreshtoken = crypto.randomBytes(40).toString('hex');
    const userToken = {refreshToken:refreshtoken,user:user._id}
    await TokenSchema.create(userToken);
    CreateCookies({res,user:tokenuser,refreshToken:refreshtoken});    
    res.status(StatusCodes.OK).json(tokenuser);
}

const logout = async(req,res)=>{ 
    res.cookie('accessToken','logout',{
        httpOnly:true,
        expires:new Date(Date.now())
    });
    res.cookie('refreshToken','logout',{
        httpOnly:true,
        expires:new Date(Date.now())
    });
    res.status(StatusCodes.OK).json('logout');
}


module.exports = {registerUser,veifyToken,Login,logout};
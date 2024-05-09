const {StatusCodes} = require('http-status-codes');
const UserSchema = require('../models/User'); 
const client = require("twilio")(process.env.ACC_SID, process.env.AUTH_TOKEN);
const custError = require('../Errors');

const sentOtp = (phoneno)=>{ 
    const verifications =  client.verify.v2.services(process.env.VERIFY_SID).verifications.create({ to: `${phoneno}`, channel: "sms" })
    return verifications.status;  
}

const recieveOtp = async(req,res)=>{
    const {otp,phoneno} = req.body;
     
    // console.log(otp,phoneno);
    const verificationChecks = await client.verify.v2.services(process.env.VERIFY_SID).verificationChecks.create({ to:phoneno, code:otp });
    if(verificationChecks.status!=='approved')throw new custError.unauthorized('verification is not valid');
    const data =  await UserSchema.findOne({phoneno});
    data.isPhonenoVerified = true,
    await data.save();
    res.status(StatusCodes.OK).json({status:verificationChecks.status});  
}

module.exports = {sentOtp,recieveOtp};












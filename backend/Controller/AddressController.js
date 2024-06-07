const { StatusCodes } = require('http-status-codes');
const custError = require('../Errors');  
const AddressSchema = require('../models/AddressSchema');

const Addaddress = async(req,res)=>{
    const {address} = req.body; 
    address.user = req.user.id;
    if(!address){
        throw new custError.NotFoundError('address is not present');
    } 
    const data = await AddressSchema.create({...address});
    res.status(StatusCodes.OK).json(data);
}


const getaddress = async(req,res)=>{
    
    if(!req?.user?.id){
        throw new custError.NotFoundError('User not logged in');
    }
    
    const findadd = await AddressSchema.find({user:req?.user?.id});

    if(!findadd){
        throw new custError.NotFoundError(`addresss with the id is not present`);
    }
 
    res.status(StatusCodes.OK).json(findadd);
}

module.exports = {
    Addaddress,
    getaddress
}
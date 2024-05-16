const { StatusCodes } = require('http-status-codes');
const custError = require('../Errors');  
const AddressSchema = require('../models/AddressSchema');

const Addaddress = async(req,res)=>{
    const {address} = req.body; 
    if(!address){
        throw new custError.NotFoundError('address is not present');
    }
    console.log(address);
    const data = await AddressSchema.create({...address});
    res.status(StatusCodes.OK).json(data);
}


const getaddress = async(req,res)=>{
    // console.log(req.user);
    const {id} = req.user; 
    if(!id){
        throw new custError.NotFoundError('id is not present');
    }
    
    const findadd = await AddressSchema.find({user:id});

    if(!findadd){
        throw new custError.NotFoundError(`addresss with the id is not present`);
    }
 
    res.status(StatusCodes.OK).json(findadd);
}

module.exports = {
    Addaddress,
    getaddress
}
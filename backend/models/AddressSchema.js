const mongoose = require('mongoose');

const TokenSchema = new mongoose.Schema({
     firstname:{
        type:String,
        required:true
     },
     lastname:{
        type:String, 
     },
    address1:{
        type:String,
        required:true
     },
     address2:{
        type:String,
     },
     city:{
        type:String,
        required:true
     },
     pincode:{
        type:Number,
        required:true
     },
     state:{
        type:String,
        required:true
     },
     country:{
        type:String,
        required:true
     },
     user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true,
     }
},{timestamps:true});

module.exports = mongoose.model('Address',TokenSchema);
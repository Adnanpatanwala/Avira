const mongoose = require('mongoose');
const TokenSchema = new mongoose.Schema({
    refreshToken:{
        type:String,
        required:[true,'refresh token required'],
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref:"User",
        required:true
    },
    isValid:{
        type:Boolean,  
        default:true
    }
},{timestamps:true});

module.exports = mongoose.model('Token',TokenSchema);
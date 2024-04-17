const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:[true,'Enter your firstname'],
        maxLength:15,
    },
    lastname:{
        type:String,
        required:[true,'Enter your lastname'],
        maxLength:15,
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:'user'
    },
    password:{
        type:String,
        require:[true,'Enter your password'],
        minLength:6,
        validate:{
            validator : function(v){
                return /^(?=.*[!@#$%^&*])(?=.*\d)(?=.*[A-Z]).{6,}$/.test(v);
            },
            message:props=>`${props.value} is not a valid password`
        }
    },
    confirmpassword:{
        type:String,
        require:[true,'Enter your password'],
        minLength:6,
        validate:{
            validator : function(v){
                return v==this.password
            },
            message:`password doesnot match`
        }
    },
    phoneno:{
        type:String, 
        maxLength:10,
        minLength:10, 
        unique:true,
        required:[true,'phone no is not added'],
        validate:{
            validator : function(v){
                return validator.isMobilePhone(v,'en-IN');
            },
            message: props=>`${props.value} is not a valid phone number for India`
        }, 
    },
    isPhonenoVerified:{
        type:Boolean,
        default:false,
    },
    email:{
        type:String, 
    },
    isEmailVerified:{
        type:Boolean,
        default:false,
    },
    verificationToken:{
        type:String,  
    },
    verifiedDate : Date,
    passwordToken:{
        type:String,
    },
    passwordTokenExpireDate:{
        type:Date,
    }

},{timestamps:true})
UserSchema.pre('save',async function(){
    if (!this.isModified('password')) return;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
})
UserSchema.pre('save',function(next){
    this.confirmpassword = undefined;
    next();
})  

UserSchema.methods.comparePassword = async function(passString){   
    const ans = await bcrypt.compare(passString,this.password);
    return ans;
}
module.exports = mongoose.model("User",UserSchema);
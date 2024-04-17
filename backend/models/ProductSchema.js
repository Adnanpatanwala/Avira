const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'enter the name of the product'],
        trim:true,
        maxlength:[100,'Enter your name'],
    },
    
    subtitle:{
        type:String,
        required:[true,'enter the name of the product'],
        trim:true,
        maxlength:[100,'Enter your name'],
    },

    description:{
        type:String,
        required :[true,'enter the name of the product'],
        maxlength:[100,'description should be less then 100'],
    },
    price:{
        type:Number,
        required:[true,'price is not entered'],
        default:0,
    },
    image:{
        type:[],
        default:['/uploads/example.PNG'],
    },
    category:{
        type:String,
        required:[true,"provide the product category"],
        enum:['office','kitchen','bedroom'],
    }, 
    colors:{
        type:[String],
        required:true,
    },
    size:{
        type:[String],
        enum:["small",'medium','large',"XL","XXL","XXXL"],
        required:[true,'enter the size']
    }, 
    freeshipping:{
        type:Boolean,
        default:false,
    },
    inventory:{
        type:Number,
        required:true,
        default:15,
    },
    averageRating:{
        type:Number,
        default:0,
    },
    noOfRating:{
        type:Number,
        default:0
    }, 
    specification: {
        type: {
            type: String,
            enum: ['Object']
        },
        Fit: {
            type: String,
            enum: ['Relaxed fit', 'Slim fit', 'Regular fit', 'Custom fit'],
            default:"Relaxed fit"
        },
        Fabric: {
            type: String,
            enum: ['100% Cotton', 'Polyester', 'Blend', 'Silk', 'Linen'] ,
            default:"100% Cotton"
        },
        Pattern: {
            type: String, 
            default:"Plain"
        },
        Wash: {
            type: String,
            enum: ['Machine Wash', 'Hand Wash', 'Dry Clean', 'No Wash Required'],
            default:"Machine Wash"
        }
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:true,
    }
},{timestamps:true});

ProductSchema.pre('deleteOne',{document:true},function(next){
    console.log('remove');
    next();
})

module.exports = mongoose.model('Products',ProductSchema);
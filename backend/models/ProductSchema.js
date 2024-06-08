const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productCode:{
        type:String,
        required:[true,"provide the product code"],
    },
    category:{
        type:String,
        required:[true,"provide the product category"],
    }, 
    title:{
        type:String,
        required:[true,'enter the name of the product'],
        trim:true,
        maxlength:[100,'Enter your name'],
    },

    description:{
        type:String,
        required :[true,'enter the name of the product'],
        maxlength:[300,'description should be less then 100'],
    },
    freeshipping:{
        type:Boolean,
        default:false,
    },

     
        
    colors:{
        type:[String],
        required:true,
    },
    inventory:{
        type:[Object],
        required:true,
    },
    size:{
        type:[String],
        enum:["small",'medium','large',"XL","XXL","XXXL"],
        required:[true,'enter the size']
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
 
    averageRating:{
        type:Number,
        default:0,
    },
    noOfRating:{
        type:Number,
        default:0
    }, 
    specification: {
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
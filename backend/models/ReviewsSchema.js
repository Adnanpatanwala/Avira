const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    title:{
        type:String,
        default:"non"
    },
    comments:{
        type:String, 
        default:"non"
    },
    rating:{
        type:Number,
        min:1,
        max:5,
        required:[true,'enter the rating'],
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:true
    },
    product:{
        type:mongoose.Types.ObjectId,
        ref:'Products',
        required:true
    },
},{timestamps:true});

ReviewSchema.index({user:1,product:1},{unique:1});

ReviewSchema.statics.calculateaverageRating = async function(productId){
    
    const result = await this.aggregate([{
          $match: {
            product:productId
          }
        }, {
          $group: {
            _id: null, 
            averageRating: {
              $avg: '$rating',
            }, 
            noOfRating: {
              $sum: 1
            }
          }
        }
    ])
    console.log(result);
    try {
        await this.model('Products').findOneAndUpdate({_id:productId},{
            averageRating:Math.ceil(result[0]?.noOfRating || 0),
            noOfRating: result[0].noOfRating||0,
        })
    } catch (error) {
        console.log(error);
    }
}

ReviewSchema.post("save",async function(){
   await this.constructor.calculateaverageRating(this.product);
})
ReviewSchema.post("deleteOne", async function(){
    await this.constructor.calculateaverageRating(this.product);
})

module.exports = mongoose.model("Review",ReviewSchema);
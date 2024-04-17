const { StatusCodes } = require('http-status-codes');
const custError = require('../Errors'); 
const ProductSchema = require('../models/ProductSchema');
const ReviewSchema = require('../models/ReviewsSchema');

const createReview = async(req,res)=>{
    const {product} = req.body;
    const isProductreal = await ProductSchema.findOne({_id:product});
    if(!isProductreal){
        throw new custError.NotFoundError('no product with this id');
    }
    const alreadyPresent = await ReviewSchema.findOne({product:product,user:req.user.id});
    if(alreadyPresent){
        throw new custError.BadRequestError('review is already present');
    }

    req.body.user = req.user.id;
    const data = await ReviewSchema.create(req.body);
    res.status(StatusCodes.OK).json(data);
}

const getAllReviews = async(req,res)=>{
    const data = await ReviewSchema.find({});
    res.status(StatusCodes.OK).json(data);
}

const getSingleReviews = async(req,res)=>{
    const {id} = req.body;
    const data = await ReviewSchema.findOne({_id:id});
    res.status(StatusCodes.OK).json(data);
}

const deleteReview = async(req,res)=>{
    const {id} = req.params;
    const data = await ReviewSchema.findOne({_id:id});
    await data.deleteOne();
    res.status(StatusCodes.OK).json("deleted");
}
const updateReview = async(req,res)=>{
    const {id} = req.params; 
    const resp = req.body;
    const data = await ReviewSchema.findOne({_id:id});
    data.title = resp?.title
    data.comments = resp?.comments
    data.rating = resp?.rating 
    await data.save();
    res.status(StatusCodes.OK).json(data);
}

module.exports = {createReview,getAllReviews,getSingleReviews,deleteReview,updateReview};
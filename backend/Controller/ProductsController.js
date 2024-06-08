const { StatusCodes } = require("http-status-codes");
const ProductSchema = require("../models/ProductSchema");
const custError = require("../Errors");
const path = require("path");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

const createProduct = async (req, res) => {
  const productimage = Object.values(req.files);
  // console.log(productimage);
  
  const products = JSON.parse(req.body.data);
  // console.log(products);
   
  if (!products) {
    throw new custError.BadRequestError("Products not present");
  }

  let arr = []; 

    for (const items of productimage) {
      try{
        const result = await cloudinary.uploader.upload(items.tempFilePath, {
          use_filename: true,
          folder: "Clothing",
        });
        fs.unlinkSync(items.tempFilePath);
        arr.push(result.secure_url);
      } catch (error) {
        console.log(error);
      }
    } 

 
   
  products.user = "65d92c4aa4e9357c50b36bd7";
  products.image = arr;
  const data = await ProductSchema.create(products);
  if(!data){
    throw new custError.BadRequestError("err in data")
  }
 

  res.status(StatusCodes.OK).json("Product added successfully");
};

const getAllProducts = async (req, res) => {
  const data = await ProductSchema.find({});
  if (!data) {
    throw new custError.NotFoundError("No Product Found");
  }
  // console.log(data)
  res.status(StatusCodes.OK).json(data);
};

const getFilterProducts = async (req,res)=>{
  const  {color,category,size,price} = req.body.newObjects;
   

  const query = {}; 
  if(category!=='All'){
      query.category = category;
  }
  if(size!=='All'){
    query.size = size;
  }
  if(color!=='All'){
    query.colors = color;
  } 
 
    query.price ={$lte:price};
   
  const data = await ProductSchema.find(query);
  if(!data){
    throw new custError.NotFoundError("No Product Found");
  }
  res.status(StatusCodes.OK).json(data);
}



const getSingleProducts = async (req, res) => {
  const { id: productId } = req.params;
  const data = await ProductSchema.findOne({ _id: productId });
  if (!data) {
    throw new custError.BadRequestError(`not product with the id ${productId}`);
  }
  res.status(StatusCodes.OK).json(data);
};


const updateProduct = async (req, res) => {
  const { id: productId } = req.params;
  const data = req.body;
  if (!data) throw new custError.BadRequestError("plz add the data");
  const product = await ProductSchema.findOneAndUpdate(
    { _id: productId },
    req.body,
    { new: true, runValidators: true }
  );
  if (!product) {
    throw new custError.BadRequestError(`not product with the id ${productId}`);
  }
  res.status(StatusCodes.OK).json("Product Updated");
};




const deleteProduct = async (req, res) => {
  const { id: productId } = req.params;
  const products = await ProductSchema.findOne({ _id: productId });
  if (!products) {
    throw new custError.BadRequestError(`no product with the id ${productId}`);
  }
  await products.deleteOne();
  res.status(StatusCodes.OK).json("Deleted successfully");
};



 

module.exports = {
  getAllProducts,
  updateProduct,
  deleteProduct,
  getSingleProducts,
  createProduct,
 
  getFilterProducts
};

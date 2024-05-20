const { StatusCodes } = require("http-status-codes");
const ProductSchema = require("../models/ProductSchema");
const custError = require("../Errors");
const path = require("path");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

const createProduct = async (req, res) => {
  // const productimage = req.files.productimg;
  const products = req.body;

  if (!products) {
    throw new custError.BadRequestError("Products not present");
  }

  // let arr = []; 

  //   for (const items of productimage) {
  //     try{
  //       const result = await cloudinary.uploader.upload(, {
  //         use_filename: true,
  //         folder: "Clothing",
  //       });
  //       fs.unlinkSync(items.tempFilePath);
  //       arr.push(result.secure_url);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
   

  // if(!req.body){ 
  //   throw new custError.BadRequestError("err in data");
  // }
  
//   req.body.image = arr;
  const data = await ProductSchema.create(...products);
  if(!data){
    throw new custError.BadRequestError("err in data")
  }

  res.status(StatusCodes.OK).json(data);
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
  
  // console.log(color,category,size, price);

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
  res.status(StatusCodes.OK).json(products);
};

const uploadImage = async (req, res) => {
  if (req.files) {
    throw new custError.BadRequestError("no image found");
  }
  const productimg = req.files.image;
  if (!productimg.mimetype.startsWith("image")) {
    throw new BadRequestError("not correct format");
  }
  const maxsize = 1024 * 1024;
  if (productimg.size > maxsize) {
    throw new BadRequestError("image size shoule be less");
  }

  const imagepath = path.join(
    __dirname,
    "../public/uploads/" + `${productimg.name}`
  );
  await productimg.mv(imagepath);
  res.status(StatusCodes.OK).json({ image: `/uploads/${imagepath}` });
};

module.exports = {
  getAllProducts,
  updateProduct,
  deleteProduct,
  getSingleProducts,
  createProduct,
  uploadImage,
  getFilterProducts
};

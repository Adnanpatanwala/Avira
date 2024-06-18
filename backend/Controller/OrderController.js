const ProductSchema = require('../models/ProductSchema');
const Order = require('../models/Order')
const custerror = require('../Errors/index');
const crypto = require('crypto');
const { StatusCodes } = require('http-status-codes');
const Razorpay = require('razorpay');
const   axios  = require('axios');

const createOrder = async (req, res) => {
    
    const { items: cartItem, tax, shippingfess,address } = req.body;
    

    if (!cartItem || cartItem.length < 1) {
        throw new custerror.BadRequestError("No item is Provided in cart");
    }
    if (!tax || !shippingfess) {
        throw new custerror.BadRequestError('tax and shipping fees provided')
    }
    if(!address){
        throw new custerror.BadRequestError('No address provided')

    }
    
    let orderItem = [];
    let subtotal = 0;
     
    for(const item of cartItem) {
        const dbproduct = await ProductSchema.findOne({ _id: item.id });
          
        if (!dbproduct) { 
            throw new custerror.NotFoundError(`No product found with the id :${item.id}`);
        } 
        let { title,_id,price } =  dbproduct;
         
  
        const singleItems = {
            name:title,
            price:price,
            amount: Number(item.amount), 
            product: _id,
        } 
        subtotal += Number(item.amount)*Number(price);
        orderItem = [...orderItem,singleItems];
        
    }
    const total = (Number(tax) + subtotal + Number(shippingfess))*100;
        let instance = new Razorpay({ key_id:process.env.RAZORPAY_KEYID, key_secret: process.env.RAZORPAY_SECRET});
        let options = {
            amount: total, 
            currency: "INR", 
          };

        const OrderCreated = await instance.orders.create(options);
        
        if(!OrderCreated){
            throw new custerror.BadRequestError("order not created");
        }

 

        // const order = await Order.create({
        //     orderItem,
        //     total,
        //     subtotal,
        //     tax,
        //     shippingFee:shippingfess,
        //     orderInfo:OrderCreated, 
        //     user:req.user.id,
        //     address,
        // });
        res.status(StatusCodes.CREATED).json({ OrderCreated });
 

}


const validate = async(req,res) =>{
    const {razorpay_payment_id:paymentId,razorpay_order_id:orderId,razorpay_signature:signature,newarr} = req.body;
   
     const sha = crypto.createHmac("sha256",process.env.RAZORPAY_SECRET);
    sha.update(`${orderId}|${paymentId}`)
    const digest = sha.digest("hex"); 
    if(digest!==signature){
        throw new custerror.Unauthenticated('Transaction not valid');
    }
   
    // const data = await Order.findOne({"orderInfo.id":orderId});
    // const updatedOrder = await Order.findOneAndUpdate(
    //     { "orderInfo.id": orderId },
    //     { 
    //         $set: { 
    //             "orderInfo.status": "created",
    //             "orderInfo.amount_paid": data.orderInfo.amount,
    //             "orderInfo.amount_due": 0
    //         }
    //     },
    //     { new: true }
    // );

    // if(!updatedOrder){
    //     throw new custerror.BadRequestError('order not updated or found')
    // }

    const data = {
        
    }
 
    const createOrder = await axios.post("http://localhost:5000/api/v1/sp/createorder",data);





 
 
    res.status(StatusCodes.ACCEPTED).json({msg:"success",orderId,paymentId});

}


const getOrder = async (req,res)=>{
   const pipeline =  [
        {
          '$project': {
            'id': '$_id', 
            'date': {
              '$toDate': '$createdAt'
            }, 
            'totalItems': {
              '$sum': '$orderItem.amount'
            }
          }
        }
      ]
    const data = await Order.aggregate(pipeline);
    if(!data){
        throw new custerror.NotFoundError("no Order is present");
    } 
    res.status(StatusCodes.OK).json(data);
}
const deleteOrder = async (req,res)=>{
    const {id} = req.body;
    console.log(id);
    const data = await Order.findOneAndDelete({ "orderInfo.id": id });
    if(!data){
        throw new custerror.NotFoundError("no Order is present");
    }
    res.status(StatusCodes.OK).json("Deleted");
}
const getSingleOrder = async (req,res)=>{
    const {id} = req.body;
    const data = await Order.findOne({ _id: id });
    if(!data){
        throw new custerror.NotFoundError("no Order is found");
    } 
    res.status(StatusCodes.OK).json(data);
}
 
 
module.exports = {createOrder,validate,getOrder,deleteOrder,getSingleOrder}
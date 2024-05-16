const ProductSchema = require('../models/ProductSchema');
const Order = require('../models/Order')
const custerror = require('../Errors/index');
const crypto = require('crypto');
const { StatusCodes } = require('http-status-codes');
const Razorpay = require('razorpay');

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
        const { title, price,_id } = dbproduct;
         
        const singleItems = {
            amount: Number(item.amount),
            name:title,
            price,
            product: _id
        }
        orderItem = [...orderItem, singleItems];
        subtotal += Number(item.amount) * Number(price);
    }
        const total = (Number(tax) + subtotal + Number(shippingfess))*100;

        // payment 

        let instance = new Razorpay({ key_id:process.env.RAZORPAY_KEYID, key_secret: process.env.RAZORPAY_SECRET});
        let options = {
            amount: total, 
            currency: "INR", 
          };

        const OrderCreated = await instance.orders.create(options);
        
        if(!OrderCreated){
            throw new custerror.BadRequestError("order not created")
        }

 

        const order = await Order.create({
            orderItem,
            total,
            subtotal,
            tax,
            shippingFee:shippingfess,
            OrderCreated, 
            user:'65d92c4aa4e9357c50b36bd7',
            address,
        });
        res.status(StatusCodes.CREATED).json({ OrderCreated });
   




}


const validate = async(req,res) =>{
    const {razorpay_payment_id:paymentId,razorpay_order_id:orderId,razorpay_signature:signature} = req.body;
    console.log(paymentId,orderId);
     const sha = crypto.createHmac("sha256",process.env.RAZORPAY_SECRET);
    sha.update(`${orderId}|${paymentId}`)
    const digest = sha.digest("hex");
    console.log(digest+'  '+signature);
    if(digest!==signature){
        throw new custerror.Unauthenticated('Transaction not valid');
    }
    res.status(StatusCodes.ACCEPTED).json({msg:"success",orderId,paymentId});

}
module.exports = {createOrder,validate}
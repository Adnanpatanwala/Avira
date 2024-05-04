const ProductSchema = require('../models/ProductSchema');
const Order = require('../models/Order')
const custerror = require('../Errors/index');
const { StatusCodes } = require('http-status-codes');
const Razorpay = require('razorpay');
const createOrder = async (req, res) => {
     
    const { items: cartItem, tax, shippingfess } = req.body;
    if (!cartItem || cartItem.length < 1) {
        throw new custerror.BadRequestError("No item is Provided in cart");
    }
    if (!tax || !shippingfess) {
        throw new custerror.BadRequestError('tax and shipping fees provided')
    }
    
    let orderItem = [];
    let subtotal = 0;
    
    for(const item of cartItem) {
        const dbproduct = await ProductSchema.findOne({ _id: item.id });
        
        if (!dbproduct) { 
            throw new custerror.NotFoundError(`No product found with the id :${item.id}`);
        }
        const { title, price,_id } = dbproduct;
        console.log(dbproduct);
        const singleItems = {
            amount: Number(item.amount),
            name:title,
            price,
            product: _id
        }
        orderItem = [...orderItem, singleItems];
        subtotal = Number(item.amount) * Number(price);

        const total = Number(tax) + subtotal + Number(shippingfess);

        // payment 

        let instance = new Razorpay({ key_id:process.env.RAZORPAY_KEYID, key_secret: process.env.RAZORPAY_SECRET});
        let options = {
            amount: total*100, 
            currency: "INR", 
          };

           instance.orders.create(options, function(err, order) {
            if(err){
                console.log(err);
            }
            console.log(order);
    });
         


        const order = await Order.create({
            orderItem,
            total,
            subtotal,
            tax,
            shippingFee:shippingfess,
            clientSecret: "paymentIntent.client_secret",
            user: '65dcf754631dd2a94ca505b1'
        })
        res.status(StatusCodes.CREATED).json({ order });
    }




}

module.exports = { createOrder }
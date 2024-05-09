require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const connectToDb = require('./db/connect')
const morgan = require('morgan');
const Otprouter = require('./Routes/VerifyOtp');
const notFound = require('./middleware/NotFoundRoutes');
const errorHandler = require('./middleware/Errorhandler');
const userrouter = require('./Routes/Userroute');
const Productrouter = require('./Routes/Productsroutes');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const fileupload = require('express-fileupload');
const cloudinary = require('cloudinary').v2;
const reviewroute = require('./Routes/ReviewRoute');
const Order = require('./Routes/OrderRoutes');


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret:process.env.CLOUDINARY_SECRET
})


// middleware -----> 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(fileupload({useTempFiles:true}));
app.use(morgan('tiny'));
app.use(cookieParser(process.env.JWT_SECRET))

// routes ----->
app.use('/api/v1/verify',Otprouter);
app.use('/api/v1',userrouter);
app.use('/api/v1/product',Productrouter);
app.use('/api/v1/review',reviewroute);
app.use('/api/v1/order',Order);
    

// routes not found and error 
app.use(notFound);
app.use(errorHandler);



const port = 5000;
const start= async()=>{
try{
await connectToDb(process.env.MONGO_URL)
app.listen(port,()=>{
  console.log(`listing on port : ${port}`);
})
}catch(err){
  console.log(err);
}
}
start();

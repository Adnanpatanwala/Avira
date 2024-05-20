const {StatusCodes} = require('http-status-codes');

const  Errorhandler = async(err,req,res,next)=>{
    let customerror =  {
        statuscode : err.statuscodes || StatusCodes.INTERNAL_SERVER_ERROR,
        msg :  err.message || 'some thing went wrong' 
    }

    if (err.name === 'ValidationError') {
        customerror.msg = Object.values(err.errors).map((item)=>item.message).join(',');  
          customerror.statuscode = 400;
      }

      if(err.code && err.code===11000){
        customerror.msg = `duplicate value entered for ${Object.keys(err.keyValue)}`
        customerror.statuscode = 400       
      }

      if (err.name === 'CastError') {
        customerror.msg = `No item found with id : ${err.value}`;
        customerror.statuscode = 404;
      }
    
    
    res.status(customerror.statuscode).json({error : customerror});
}
module.exports = Errorhandler;
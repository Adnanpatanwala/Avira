const axios =  require("axios");


const authenticateShiprocket = async(req,res,next)=>{
    const response = await axios.post("https://apiv2.shiprocket.in/v1/external/auth/login",{
        email:process.env.SHIPROCKET_EMAIL,
        password:process.env.SHIPROCKET_PASSWORD 
    });
    console.log(response);
    const token = response.data.token
    res.status(200).json(response);
}

module.exports = {authenticateShiprocket};
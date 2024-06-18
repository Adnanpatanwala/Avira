const axios =  require("axios");


const authenticateShiprocket = async(req,res)=>{
    let data = JSON.stringify({
    email:process.env.SHIPROCKET_EMAIL,
    password:process.env.SHIPROCKET_PASSWORD 
      });
    // const response = await axios.post("https://apiv2.shiprocket.in/v1/external/auth/login",{
    // }); 

    var config = {
        method: 'post',
      maxBodyLength: Infinity,
        url: 'https://apiv2.shiprocket.in/v1/external/auth/login',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
    // const token = response.data.token
    axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
    res.status(200).json(response);
}

module.exports = {authenticateShiprocket};

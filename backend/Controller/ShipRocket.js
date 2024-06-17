const { StatusCodes } = require("http-status-codes");
const ShipRocket = require("../Helper/ShiprocketClass");
const Tracking = require("../models/Tracking");

const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQ3MDk0OTgsInNvdXJjZSI6InNyLWF1dGgtaW50IiwiZXhwIjoxNzE5NDczODg5LCJqdGkiOiJsZ0RHODNrdmlWM2g0SWluIiwiaWF0IjoxNzE4NjA5ODg5LCJpc3MiOiJodHRwczovL3NyLWF1dGguc2hpcHJvY2tldC5pbi9hdXRob3JpemUvdXNlciIsIm5iZiI6MTcxODYwOTg4OSwiY2lkIjo0NTQwMTIyLCJ0YyI6MzYwLCJ2ZXJib3NlIjpmYWxzZSwidmVuZG9yX2lkIjowLCJ2ZW5kb3JfY29kZSI6IiJ9.T_wZAEoSdOia9-Ch97N9Y0KIoMitJ1gU6hme6LGalVM";

const login = async (req, res) => {
  const Shiprocket = new ShipRocket();
  const data = await Shiprocket.login();
  res.status(200).json(data);
};

const createOrderShipRocket = async (req, res) => {
  const Shiprocket = new ShipRocket(token);
  const data = await Shiprocket.createOrder();
  res.status(200).json(data);
};

const tracking = async(req,res)=>{
  const data = await Tracking.create(req.body);
  res.status(StatusCodes.CREATED).json("Order Updated");
}

module.exports = { login, createOrderShipRocket,tracking };

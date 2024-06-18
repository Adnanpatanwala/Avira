const axios = require("axios");
const { json } = require("express");

class ShipRocket {
  constructor(token) {
    this.authInstance = axios.create({
      baseURL: process.env.BASE_URL,
    });
    this.Instace = axios.create({
      baseURL: process.env.BASE_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  async login() {
    try {
      const result = await this.authInstance.post("auth/login", {
        email: process.env.SHIPROCKET_EMAIL,
        password: process.env.SHIPROCKET_PASSWORD,
      });
      return {
        status: true,
        message: "Auth token fetched!",
        data: result.data,
      };
    } catch (error) {
      return { status: false, message: "Error while operating", data: null };
    }
  }

  async createOrder(){
    try {
    const date = new Date();
    const yr = date.getFullYear();
    const month = String(date.getMonth()+1).padStart(2,'0');
    const day = String(date.getDate()).padStart(2,"0");

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const orderdate = `${yr}-${month}-${day} ${hours}:${minutes}`;

        const data =  {
          order_id: 224447,
          order_date: orderdate,
          pickup_location: "Primary",
          "comment": "Reseller: M/s Goku",
          "billing_customer_name": "Naruto",
          "billing_last_name": "Uzumaki",
          "billing_address": "House 221B, Leaf Village",
          "billing_address_2": "Near Hokage House",
          "billing_city": "New Delhi",
          "billing_pincode": "110002",
          "billing_state": "Delhi",
          "billing_country": "India",
          "billing_email": "naruto@uzumaki.com",
          "billing_phone": "9876543210",
          "shipping_is_billing": true,
           
          "order_items": [
            {
              "name": "Kunai",
              "sku": "chakra123",
              "units": 10,
              "selling_price": "900",
              "discount": "",
              "tax": "",
              "hsn": 441122
            }
          ],
          "payment_method": "Prepaid",
          "shipping_charges": 0,
          "giftwrap_charges": 0,
          "transaction_charges": 0,
          "total_discount": 0,
          "sub_total": 9000,
          "length": 10,
          "breadth": 15,
          "height": 20,
          "weight": 2.5
        };
         
     
 
        const result = await this.Instace.post("orders/create/adhoc",data)
        return {message:"order Created",data:result.data};
        
        } catch (error) {
          return {message:"order creation failed",data:error?.response.data};
      }
  }

 
}

module.exports = ShipRocket;

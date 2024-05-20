import React, { useContext, useEffect, useReducer } from 'react'
import { createContext } from 'react'
import axios from 'axios'
import { ADD_TO_CART, CALCULATE_ITEMS, add_to_WishList, add_to_Cart_to_WishList, add_address,Loading,ADD_SELECTEDADDRESS,ERROR } from "../actions";
import { reducer } from "../Reducer/CartReducer"
import { useRef } from 'react';
const cartContextProvider = createContext();


const initialState = {
  loading:true,
  cart: [],
  totalItems: 0,
  totalAmount: 0,
  shippingAmount: 0,
  address: [],
  wishlist: [],
  selectedAddress:{},
  error:''
}
const CartContext = ({ children }) => {

const [state, dispatch] = useReducer(reducer, initialState);

const addToCart = (data) => {
  dispatch({ type: ADD_TO_CART, payload: data });
}

  const addTowishlist = (data) => {
    dispatch({ type: add_to_WishList, payload: data })
  }

  const addToCartFromWishList = () => {
    dispatch({ type: add_to_Cart_to_WishList })
  }

  const addAddress = (data) => {
    dispatch({type:Loading});
    dispatch({ type: add_address, payload: data })
  }


  const handlePayment = async (e) => {
    
    const newarr = state.cart.map((item) => {
      return {
        name: item.title,
        id: item.mainId,    
        amount: Number(item.amount),
      }
    })  
    try {
      
      const data = await axios.post(`${process.env.REACT_APP_DOMAINURL}/api/v1/order`, {
        items: newarr,
        tax: 50,
        shippingfess: 50,
        address:state?.selectedAddress,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }) 
      console.log(data);
        
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEYID,
        amount: Number(data?.data?.OrderCreated.amount),
        currency: "INR",
        name: "adnan",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: data?.data?.OrderCreated.id,

        handler: async function (response) {
          console.log(response);
          const resp = await axios.post(`${process.env.REACT_APP_DOMAINURL}/api/v1/order/validate`,{...response},{
            headers: {
              'Content-Type': 'application/json',
            } 
          }) 

          if(resp.data.msg==='success'){
            console.log('success');
          }
 
        }, 
        prefill: {
          name: "adnan",
          email: "youremail@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#2D2D2D",
        },
      };

      const rzp1 = new window.Razorpay(options);

      rzp1.on("payment.failed", function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });

      rzp1.open();
      e.preventDefault();
    
  } catch (error) {
    console.log(error);
  }
    
  }


  const createAddress = async(response)=>{
    try { 
      const data = await axios.post(`${process.env.REACT_APP_DOMAINURL}/api/v1/address`,{
        address:{...response,user:"66279108d534d63eed20615d"}
      },{
      withCredentials: true
      }
    )
      if(data){ 
       return getAddress();
      }
      
    } catch (error) { 
      dispatch({type:ERROR,payload:error?.response?.data.error});
    }
  }

  const getAddress = async()=>{
    try {  
      const data = await axios.get(`${process.env.REACT_APP_DOMAINURL}/api/v1/address/getaddress`,{ 
      withCredentials: true
    }); 
      if(data){ 
        addAddress(data?.data);
      }
      
    } catch (error) { 
      dispatch({type:ERROR,payload:error?.response?.data.error});
    }
  }

 

  useEffect(() => {
    dispatch({ type: CALCULATE_ITEMS });
  }, [state.cart])

  const addSelectedAddress =(data) =>{
    dispatch({type:ADD_SELECTEDADDRESS,payload:data})
}
 
 

  return (
    <cartContextProvider.Provider value={{
      ...state,
      addToCart,
      addTowishlist,
      addToCartFromWishList,
      addAddress,
      handlePayment,
      createAddress,
      getAddress, 
      addSelectedAddress,
      
    }}>
      {children}
    </cartContextProvider.Provider>
  )
}


export default CartContext;

export const useCartContext = () => {
  return useContext(cartContextProvider)
}
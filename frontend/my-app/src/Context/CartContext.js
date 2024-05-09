import React, { useContext, useEffect, useReducer } from 'react'
import { createContext } from 'react'
import axios from 'axios'
import { ADD_TO_CART, CALCULATE_ITEMS, add_to_WishList, add_to_Cart_to_WishList, add_address } from "../actions";
import { reducer } from "../Reducer/CartReducer"
const cartContextProvider = createContext();

const initialState = {
  cart: [],
  totalItems: 0,
  totalAmount: 0,
  shippingAmount: 0,
  address: "",
  wishlist: [],
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
    dispatch({ type: add_address, payload: data })
  }


  const handlePayment = async (e) => {


    const newarr = state.cart.map((item) => {
      return {
        name: item.title,
        id: item.mainId,
        amount: item.amount
      }
    })
 
      const data = await axios.post('http://localhost:5000/api/v1/order', {
        items: newarr,
        tax: 50,
        shippingfess: 50
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true
      })
       
if(data){
      const options = {

        key: process.env.REACT_APP_RAZORPAY_KEYID,
        amount: data?.data?.order.total,
        currency: "INR",
        name: "",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: data.id,

        handler: async function (response) {
          console.log(response);
          const resp = await axios.post("http://localhost:5000/api/v1/order/validate",{...response},{
            headers: {
              'Content-Type': 'application/json',
            }
          })
 
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
    }
    
  }


  useEffect(() => {
    dispatch({ type: CALCULATE_ITEMS });
  }, [state.cart])

  return (
    <cartContextProvider.Provider value={{
      ...state,
      addToCart,
      addTowishlist,
      addToCartFromWishList,
      addAddress,
      handlePayment
    }}>
      {children}
    </cartContextProvider.Provider>
  )
}


export default CartContext;

export const useCartContext = () => {
  return useContext(cartContextProvider)
}
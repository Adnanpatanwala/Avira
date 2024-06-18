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
        
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEYID,
        amount: Number(data?.data?.OrderCreated.amount),
        currency: "INR",
        name: "adnan",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: data?.data?.OrderCreated.id,

        handler: async function (response) {
        
          const resp = await axios.post(`${process.env.REACT_APP_DOMAINURL}/api/v1/order/validate`,{...response,newarr},{
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials:true
          }) 

          if(resp.data.msg==='success'){
             
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

      rzp1.on("payment.failed",async function(response) {
        
        alert(response.error.description); 
        const resp = await axios.delete(`${process.env.REACT_APP_DOMAINURL}/api/v1/order`,{id:response?.error.metadata.order_id},{
          headers: {
            'Content-Type':'application/json',
          },
          withCredentials:true,
        }) 
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
        address:{...response}
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

  const getAddress = async(navigate)=>{
    try {  
      const data = await axios.get(`${process.env.REACT_APP_DOMAINURL}/api/v1/address/getaddress`,{ 
      withCredentials: true
    }); 
      if(data){ 
        addAddress(data?.data);
        return;
      }
      return navigate('/login');
      
    } catch (error) { 
      navigate('/login');
      alert(error?.response?.data.error.msg);
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
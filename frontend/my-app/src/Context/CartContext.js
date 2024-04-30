import React, { useContext, useEffect, useReducer } from 'react'
import { createContext } from 'react'
import {ADD_TO_CART,CALCULATE_ITEMS,add_to_WishList,add_to_Cart_to_WishList,add_address} from "../actions";
import {reducer} from "../Reducer/CartReducer"
const cartContextProvider = createContext();

const initialState = {
cart:[],
totalItems:0,
totalAmount:0,
shippingAmount:0,
address:"",
wishlist:[],
}
const CartContext  = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState);

    const addToCart = (data) =>{
        dispatch({type:ADD_TO_CART,payload:data});
      } 
 
      const addTowishlist = (data)=>{
        dispatch({type:add_to_WishList,payload:data})
      }

      const addToCartFromWishList = () =>{
          dispatch({type:add_to_Cart_to_WishList})
      }

      const addAddress = (data) =>{
        dispatch({type:add_address,payload:data})
      }
     
      
    
    useEffect(()=>{ 
      dispatch({type:CALCULATE_ITEMS});
    },[state.cart])

  return ( 
    <cartContextProvider.Provider value={{
      ...state,
      addToCart, 
      addTowishlist,
      addToCartFromWishList,
      addAddress
    }}>
        {children}
    </cartContextProvider.Provider>
  )
}


export default CartContext;

export const useCartContext=()=>{
    return useContext(cartContextProvider)
}
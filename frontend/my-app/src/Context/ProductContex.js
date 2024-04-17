import React, { createContext, useContext, useEffect, useReducer } from 'react'
import  {reducer}  from '../Reducer/ProductReducer';
import axios from 'axios';
import {ProductFetching,Loading,ProductError,SingleProductFetching} from "../actions";

const PrdContex = createContext();
const initialState = {
  product:[],
  isloading:false,
  singleProduct:{},
  error:"",
 
}
const ProductContex = ({children}) => {
  const [state,dispatch] = useReducer(reducer,initialState);
  const productfetching = async()=>{
    try {
      dispatch({type:Loading});
      const data = await axios.get("http://localhost:5000/api/v1/product");
      dispatch({type:ProductFetching,payload:data.data});
    } catch (error) {
      dispatch({type:ProductError,payload:error.response});
    }
  }
  useEffect(()=>{
    productfetching();
  },[]);

  const SingleProductFetch= async(id)=>{
     
    try{
      dispatch({type:Loading});
      const data = await axios.get(`http://localhost:5000/api/v1/product/${id}`);
      dispatch({type:SingleProductFetching,payload:data});
    }catch(err){
      dispatch({type:ProductError,payload:err.response});
    
    }
  }

  
  return ( 
    <PrdContex.Provider value={{
        ...state,
        SingleProductFetch,
      
    }}>
        {children}
    </PrdContex.Provider>
  )
}
export default ProductContex;

export const useGlobalProductContex=()=>{
    return useContext(PrdContex);
}

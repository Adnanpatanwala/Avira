import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import {reducer} from "../Reducer/FilterReducer";
import {useGlobalProductContex} from '../Context/ProductContex';
import {UPDATE_FILTER,LOAD_PRODUCTS,FILTER_PRODUCTS} from "../actions";
import axios from 'axios';
const initialstate = {
  filterproduct:[],
  all_products:[],
  filter:{
  color : "All",
  category:'All',
  size : "All",
  price: 0,
  min_price:0,
  max_price:0,
  }
}

const FilterProvider = createContext();
const FilterContext = ({children}) => {
  const {product} = useGlobalProductContex();
  const [state,dispatch] = useReducer(reducer,initialstate);

  useEffect(()=>{ 
    dispatch({type:LOAD_PRODUCTS,payload:product});
  },[product])
  
  const applyFilter = async()=>{
    const {min_price,max_price,...newObjects} = state.filter;
    try {
      const data = await axios.post('http://localhost:5000/api/v1/product/filter',{newObjects},{
      headers: {
        'Content-Type': 'application/json'
      }});
      if(data){  
        console.log(data);
        dispatch({type:FILTER_PRODUCTS,payload:data});
      }
    } catch (error) {
      console.log(error);
    }
  }


 

const updateFilter = (e)=>{
const name = e.target.name;
let value = e.target.value;
console.log(name,value); 
if(name==="category"){
  console.log(value);
  value = e.target.options[e.target.selectedIndex].text;
}
if(name==="color"){
  value = e.target.dataset.color;
}
if(name==="price"){
  value = Number(value);
}
dispatch({type:UPDATE_FILTER,payload:{name,value}});
}


  return ( 
    <FilterProvider.Provider value={{
        ...state,
        updateFilter,
        applyFilter
    }}>
        {children}
    </FilterProvider.Provider>
  )
}

export default FilterContext;

export const useFilterContext=()=>{
    return useContext(FilterProvider);
}
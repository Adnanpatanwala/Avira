import React,{useState} from 'react'
import styled from 'styled-components'
import { FaCheck } from "react-icons/fa6";
import { useFilterContext } from '../Context/FilterContext';
import { FaFilter } from "react-icons/fa6";  
import {uniqueValues} from "../utils/uniqueValue";
import { IoIosCloseCircleOutline } from "react-icons/io";


const FilterBox = ({setFilterOpen}) => {
    const {updateFilter,filter,filterproduct:product,applyFilter} = useFilterContext();
    
    const {price,color,size,category,max_price,min_price} = filter;
    const sizeArray = uniqueValues(product,"size");
    const colorArray = uniqueValues(product,"colors");
    const categoryArray = uniqueValues(product,"category");
  return (
    <Wrapper> 
         <div className="left-shop">
                <div className="header-shop">
                    <h3>Filter</h3>
                    <button onClick={()=>setFilterOpen(false)}><IoIosCloseCircleOutline /></button>
                </div>
                <div className="category">
                <label htmlFor="select">Select Category : </label> 
                    <select name="category"  onChange={updateFilter} value={category} >
                         {
                             categoryArray.map((item,index)=>{
                                 return (
                                    <option key={index}>
                                        {item}
                                    </option>

                                )
                            })
                         }  
                    </select>
                </div>

                <div className="size">
                <label htmlFor="size">Size</label>
                    <div className="size-btns">
                        {
                            sizeArray.map((item,index)=>{
                            return(<button 
                            key={index} 
                            className={item===size?'size-btn size-btn-active':"size-btn"}
                            onClick={updateFilter}
                            name="size"
                            value={item}
                            >
                            {item}
                            </button>
                            )}
                            )
                        }                       
                    </div>
                </div>

                <div className="colors-container">
                    <label htmlFor="colors">Colors</label>
                    <div className="colors">
                     {
                        colorArray.map((item,index)=>{
                            if(item==="All"){
                                return <button 
                                key={index} 
                                data-color={item}
                                className={color===item?'all-btn-active':'all-btn'}
                                name='colors' 
                                onClick={updateFilter}
                                >
                                    {item}
                                </button>
                            }
                            return <button 
                            key={index}  
                            data-color={item} 
                            onClick={updateFilter}
                            className={color===item?'color-btn-active color-btn':'color-btn'}
                            style={{backgroundColor:item}}
                            name='color'
                           >
                            {color===item?<FaCheck/>:null}
                           </button>
                        })
                     }
                    </div>
                </div>
                <div className="price">
                    <label htmlFor="price">Price</label>
                    <div className="inner-container-price">
                        <input type="range"  id=""
                            // min={min_price}
                            // max={max_price}
                            // value={price}
                            onChange={updateFilter}
                            name="price"
                            
                        />
                        <div className="price-change-container">
                            <span>{min_price}</span>
                            <p>{price}</p>
                            <span>{max_price}</span>
                        </div>
                    </div>
                </div>
                <div className="apply-filter">
                    <button onClick={()=>{applyFilter();setFilterOpen(false);}} >Apply</button>
                </div>
            </div>
    </Wrapper>
  )
}

export default FilterBox;

const Wrapper = styled.div`
  
    box-shadow: 0px 0px 5px gray;
    border-radius: 10px; 
    padding: 20px;   
    width: 90%;
    position: sticky;
    top: 150px;
    left:0px; 
    margin: 50px 0px;
    box-sizing: border-box;
    background-color: white;
    z-index: 2;
 
label{
    display: block;
    font-size: 12px;
    color: gray;
    font-weight: 400;
}
.category{
    select{
        outline: none;
        background-color: #eeeeee;
        border-radius: 5px;
        padding: 2px;
        box-sizing: border-box;
        margin: 5px;
        width: 150px;
    }
    margin: 15px 0px;
}
.header-shop-heading{
    display: flex;
    display: none;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #2D2D2D;
    padding: 8px 0px;
    h4{
        font-weight: 500;
        color: #2D2D2D;
    }
    button{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        border: 1px solid #2D2D2D;
        padding: 5px;
        border-radius: 5px;
    }
}
.header-shop h3{
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
}
.size{ 
    margin: 15px 0px;
}
 

.colors {
    display: flex; 
    gap: 10px;
}
 
.colors-container{
    margin: 15px 0px;
} 
 .apply-filter button{
    width: 100%;
    padding: 6px 0px;
    background-color: #2D2D2D;
    color: white;
    font-weight: 500;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin: 15px 0px;
 }

 .inner-container-price{
    input{
        accent-color: #DB6B97;
        cursor: pointer;
        background-color: white;
    }
 }

 @media screen and (min-width:992px) and (max-width:1199px) {
    width: 100%;
     
 }
 
 @media screen and (min-width:767px) and (max-width:991px) {
    width: 300px;
}

@media screen and (max-width:767px) {
    .header-shop{
        display: flex;
        justify-content: space-between;
        button{
            font-size: 20px;
        }
    }
 }

`
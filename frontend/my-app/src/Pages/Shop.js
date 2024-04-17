import React, { useEffect } from 'react'
import styled from 'styled-components';
import Item from '../Components/Item';
import Loading from '../Components/Loading';
import {uniqueValues} from "../utils/uniqueValue";
import { useGlobalProductContex } from '../Context/ProductContex';
import { FaCheck } from "react-icons/fa6";
import { useFilterContext } from '../Context/FilterContext';

const Shop = () => {
    const {isloading} = useGlobalProductContex();
    const {updateFilter,filter,filterproduct:product,applyFilter} = useFilterContext();
    const {price,color,size,category,max_price,min_price} = filter;
    if(isloading){
        return( 
            <div className="backloader">
            <Loading/>
            </div>
            )
        } 
        const sizeArray = uniqueValues(product,"size");
        const colorArray = uniqueValues(product,"colors");
        const categoryArray = uniqueValues(product,"category");
  return ( 
    <Wrapper className="global-container">
        <div className="shop-container">
            <div className='left-cont'>
            <div className="left-shop">
                <div className="header-shop">
                    <h3>Filter</h3>
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
                            min={min_price}
                            max={max_price}
                            value={price}
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
                    <button onClick={applyFilter}>Apply</button>
                </div>
            </div>
            </div>
            <div className="right-shop">
                  {
                    product.map((items)=>{
                        return ( 
                            <>
                            <Item key={items._id} {...items}/> 
                            </>
                        )
                    })
                  }
            </div>
        </div>
    </Wrapper>
  )
}

export default Shop;
const Wrapper = styled.div`
 
 .inner-container-price input{
    width: 100%;
 }
.price-change-container{
    display: flex;
    justify-content: space-between;
}
.price-change-container>*{
font-size: 14px;
font-weight: 600;
color: #DB6B97;

}

.color-btn-active{
    opacity: 1 !important;
    border: 1.5px solid #2D2D2D;
    text-align: center;
}
.color-btn{
opacity: 0.4;
width: 25px;
height: 25px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
color: white;

}
.all-btn-active{
    background-color: #2D2D2D;
    color: white;
    padding: 3px;
    border-radius: 5px;
    box-sizing: border-box; 
}
.all-btn{
    padding: 3px;
    color: #2D2D2D;
}
 .size-btns{
    display:flex;
    gap: 5px;
    flex-wrap: wrap;
 }
 .size-btn-active{
    border: none;
    background-color: #2D2D2D ;
    color: white !important;
 }
 .size-btn{
    border: 1px solid #2D2D2D;
    padding: 4px;
    font-size: 13px;
    color: #2D2D2D; 
    border-radius: 5px;
 }
.shop-container{
    display: grid;
    grid-template-columns: 25% 75%;
} 
.left-shop{  
    box-shadow: 0px 0px 5px gray;
    border-radius: 10px; 
    padding: 20px;   
    width: 90%;
    position: sticky;
    top: 50px;
    left:0px; 
    margin: 50px 0px;
    box-sizing: border-box;
}
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
  

 .right-shop{
    padding: 20px; 
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
    grid-gap: 30px;
    justify-items: center;
 }
 
`
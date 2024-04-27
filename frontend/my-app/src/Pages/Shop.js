import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Item from '../Components/Item';
import Loading from '../Components/Loading';
import { useFilterContext } from '../Context/FilterContext';
import { useGlobalProductContex } from '../Context/ProductContex';
 
import Filtercontainer from "../Components/FilterBox"


const Shop = () => {
    const {isloading} = useGlobalProductContex();
    const {filterproduct:product} = useFilterContext();
    
    if(isloading){
        return( 
            <div className="backloader">
            <Loading/>
            </div>
            )
        } 
  return ( 
    <Wrapper className="global-container">
        <div className="shop-container">
            <div className='left-cont'>
                <Filtercontainer/>
            </div>
                {/* <div className="header-shop-heading">
                    <h4>Products</h4>
                     <button ><FaFilter /></button>
                </div>  */}
            <div className="right-shop">
                  {
                    product.map((items)=>{
                        return ( 
                            <>
                            <Item key={items._id} {...items}/> 
                            <Item key={items._id} {...items}/> 
                            <Item key={items._id} {...items}/> 
                            <Item key={items._id} {...items}/> 
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
    position: relative;
} 
   

 .right-shop{
    padding: 20px; 
    display: grid;
    grid-template-columns: repeat(auto-fit,250px);
    grid-gap: 30px;
 }
 .left-cont{
    z-index: 2; 
 }
 .header-shop-heading{
    max-height: 30px;
 }

 @media screen and (max-width:767px) {
    .left-shop{
        background-color: white;
    }
    .shop-container{
         display: block;
         box-sizing: border-box;
    }
    .left-cont{
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        display: none;
    }
    .right-shop{
        padding: 10px; 
        justify-content: center;
        grid-template-columns: 50% 50%;
        grid-gap: 10px;
    }
    .header-shop-heading{
        display: flex;
    }
    .product-tumb{
        height: 180px;
    } 
    .product-details{
        padding: 5px 10px 0px 5px;
    }
    .product-catagory{
        box-shadow: none;
        font-size: 10px; 
        margin: 0px;
    }
    .product-details h4{
        padding: 0px 5px;
        font-size: 14px;
    }
    .product-links{
        display: none;
    }
    .product-price{
        display: flex;
        align-items: center;
        width: auto;
        font-size: 14px !important; 
        justify-content: right;
    }
    .product-bottom-details{
        display: block; 
        padding: 0px 10px 10px 10px;
    }
    .product-price small{
        font-size: 12px;
    }
    .product-card{
        box-shadow: none;
    } 
    .product-tumb img{
        border-radius: 5px;
    }
 }
 
`
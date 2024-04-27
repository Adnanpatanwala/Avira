import React from 'react'
import styled from 'styled-components';
import {NavLink} from "react-router-dom"
import WishList from '../Images/WishButton.svg';
import { useCartContext } from '../Context/CartContext'; 
import CartBtn from '../Images/Cartbtn.svg';

const BottomNavBar = () => {
    const {totalItems,wishlist} = useCartContext();
  return ( 
    <Wrapper>  
        <NavLink className='wishlist-container' to='/wishlist'>
        <div className="wishlist-btn">
            <img src={WishList} alt="" /> 
            {wishlist.length>0 && <div className="wishlist-count">{wishlist.length}</div>}
        </div>
        <h3>wishlist</h3>
        </NavLink>


        <NavLink className='cart-container' to='/cart'>
        <div className="cart-btn">
             <img src={CartBtn} alt="" /> 
            <div className={totalItems<1?"cart-none":"cart-count"}>{totalItems}</div>
        </div>
        <h3>cart</h3>
        </NavLink>

    </Wrapper>
  )
}

export default BottomNavBar;

const Wrapper = styled.div`
background-color:white ;
position: fixed;
width: 100%;
bottom: 0px;
left: 0px;
display: flex;
gap: 5px;
padding: 10px; 
background-color: #DB6B97;
display: none;
z-index: 2;
border-top: 1px solid #212529;

.cart-container,.wishlist-container{
    display: flex;
    flex-basis: 50%;
    gap: 10px;  
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: white;
    h3{
        font-weight: 500;
        font-size: 16px;
    }
}
.wishlist-container{
    position: relative;
}
.wishlist-container::after{
    position: absolute;
    content: "";
    border-right: 1px solid #212529;
    top: 0px;
    right: -2.5px;
    height: 100%;
}
.cart-btn,.wishlist-btn{
    position: relative; 
    img{
        display: flex;
        align-items: center;  
        filter: brightness(0) invert(1);
    }

 } 
 .cart-count,.wishlist-count{
    position: absolute;
    top: -10px;
    right: -10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #212529;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
 }
 .cart-none{
    display: none;
 } 
 @media screen and (max-width:767px){
    display: flex;
    box-sizing: border-box; 
 }
`

import React from 'react'
import styled from 'styled-components';
import Logo from '../Images/Logo.svg';
import User from '../Images/usericon.svg';
import Seatchbtn from '../Images/Search.svg';
import WishList from '../Images/WishButton.svg';
import CartBtn from '../Images/Cartbtn.svg';
import {NavLink} from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'; 
const NavBar = () => {
    const {totalItems,wishlist} = useCartContext();
   return ( 
    <Wrapper> 
        <nav className='navbar'>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>

            <div className="links">
                <li><NavLink to='/' >Home</NavLink></li>
                <li><NavLink to='/shop' >Shop</NavLink></li> 
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </div>

            <div className="right-corner">
                <div className="login">
                    <NavLink to='/login' ><img src={User} alt="" /> Login/Register</NavLink>
                </div>
                <div className="search-btn">
                    <button><img src={Seatchbtn} alt="" /></button>
                </div>
                <div className="cart-btn">
                    <NavLink to='/cart'><img src={CartBtn} alt="" /></NavLink>
                    <div className={totalItems<1?"cart-none":"cart-count"}>{totalItems}</div>
                </div>
                <div className="wishlist-btn">
                    <NavLink to='/wishlist'><img src={WishList} alt="" /></NavLink>
                    {wishlist.length>0 && <div className="wishlist-count">{wishlist.length}</div>}
                </div>
            </div>

        </nav>
    </Wrapper>
  )
}

export default NavBar;
const Wrapper = styled.div`
 .navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px; 
    box-shadow: 0px 0px 2px gray;
 }
 .links{
    display: flex;
    gap: 40px; 
 }
 .links li{
    list-style: none;
    
}
.links li>*{
    text-decoration: none;
    font-size: 16px;
 }
 .right-corner{
    display: flex;
    gap: 20px; 
 }
 .login>*{
    font-size: 15px;
    color: #DB6B97;
    text-align: center;
    display: flex;
    align-items: center;
    gap: 5px;
    text-decoration: none;
    font-weight: 600;
 } 
 .wishlist-btn button,.search-btn button{
    background: none;
    border: none;

 }
 .cart-btn,.wishlist-btn{
    position: relative;
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
`
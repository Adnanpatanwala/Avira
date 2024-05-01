import React, { useState } from 'react'
import styled from 'styled-components';
import Logo from '../Images/Logo.svg';
import User from '../Images/usericon.svg';
import Seatchbtn from '../Images/Search.svg';
import WishList from '../Images/WishButton.svg';
import CartBtn from '../Images/Cartbtn.svg';
import {NavLink} from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'; 
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md"; 
import { FaUserCircle } from "react-icons/fa";
import { useAuthContext } from '../Context/AuthContext';
import { FaArrowCircleDown } from "react-icons/fa";






const NavBar = () => {
 
    const {cookies} = useAuthContext();

    const {totalItems,wishlist} = useCartContext();
    const [openSidebar,setOpenSidebar] = useState(false);
   return ( 
    <Wrapper> 
        <nav className='navbar'>
            <div className="logo">
                <NavLink to='/' className='logo-inside'>Fatema's Store</NavLink>
                 
            </div>

            <div className="links">
                <li><NavLink to='/' >Home</NavLink></li>
                <li><NavLink to='/shop' >Shop</NavLink></li> 
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </div>

            <div className="right-corner">
                { 
                    !cookies?.user ?     
                    <div className="login">
                    <NavLink to='/login' ><img src={User} alt="" /> Login/Register</NavLink>
                </div>:
                <button className='user-login'><p>{cookies.user}</p>
                <FaArrowCircleDown />
                </button>
                }
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
                <div>
                <button className="mobile-login"><FaUserCircle /></button>
                </div>
                <div className="hamburger">
                    <button onClick={()=>setOpenSidebar(true)}><CiMenuFries /></button>
                </div>
            </div>

        </nav>
 

 


{
    openSidebar && <nav className="sidebar">
            <div className="sidebar-header">

            <div className="logo">
                {/* <img src={Logo} alt="" /> */}
                <NavLink to='/' className='logo-inside'>Fatema's store</NavLink>
            </div>
                <button className='close-sidebar' onClick={()=>setOpenSidebar(false)}><MdOutlineClose />close</button>
            </div>

            <div className="links">
                <li><NavLink to='/' onClick={()=>setOpenSidebar(false)}>Home</NavLink></li>
                <li><NavLink to='/shop' onClick={()=>setOpenSidebar(false)}>Shop</NavLink></li> 
                <li><NavLink to='/about' onClick={()=>setOpenSidebar(false)}>About</NavLink></li>
                <li><NavLink to='/contact' onClick={()=>setOpenSidebar(false)}>Contact</NavLink></li>
            </div>

        </nav>
}


    </Wrapper>
  )
}

export default NavBar;
const Wrapper = styled.div`
position: sticky;
left: 0px;
top: 0px;
background-color: white;
z-index: 5;
.logo-inside{ 
        text-decoration: none;
        color: #DB6B97; 
        font-size: 25px;
        font-weight: 500;   
        font-family: "Cedarville Cursive", cursive;
        font-style: normal;
        border: 1px solid #DB6B97;
        border-radius: 20px;
        padding: 2px 20px;
        outline: none;
    }
 .navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px; 
    box-shadow: 0px 0px 2px gray;
    position: relative;
 }
 .links{
    position: absolute;
    display: flex;
    gap: 40px; 
    left: 50%; 
    transform: translateX(-50%);
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

 .sidebar{ 
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: white;
    width: 100%;
    height: 100%;
    z-index: 2;

    .logo{ 
        margin: 0px;
        /* width: 80px;  */
        
    } 
 
    .sidebar-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin:15px;
    }
    .links{ 
        display: block;
        text-align : center;
        margin-top: 100px;

    } 
    .close-sidebar{
        font-size: 14px;
        color: white;
        display: flex;
        align-items: center; 
        gap: 3px;
        position: relative;
        padding: 5px 10px;
        background-color: #DB6B97;
        border-radius: 30px;
          
    } 
    .links > * > *{ 
        padding:  8px  20px;
        display: inline-block;
        font-size: 20px;
        color: #212529;
        margin: 5px 0px;
    }
    .active{
        background-color: #DB6B97;
        border-radius: 50px;
        color: white;
    }

 }

  

  .hamburger{
    display: none;
  }

  .mobile-login{ 
    color: #DB6B97;
    display: none;
  }
  
  .user-login{
    font-size: 16px;
    font-weight: 400;
    text-transform: capitalize;
    color: white; 
    padding: 0px 10px; 
    display: flex;
    gap: 5px;
    align-items: center;
    border-radius: 15px;
    background-color: #DB6B97;
     
  }
  

  @media screen and (min-width:767px) and (max-width:991px) {
    .login{
        display: none;
    }
    .links {
        gap: 25px;
    }
    .navbar{ 
        padding: 10px 25px
    } 
    .right-corner > *{
        display : flex;
        align-items: center;
    }
  }
  
  @media screen and (max-width:767px){
     .hamburger{
       display: block;
     }
    .links,.login{
        display: none;
    }
    .navbar{
        padding: 5px 10px;
    }
    .logo{
        /* width: 70px; */
        margin: 10px;
    }
    .logo-inside{
        font-size: 18px;
    }
    .logo img{
        width: 100%;
        display: block;
        margin: auto;
    }
    .right-corner{
        gap: 20px;
    }
    .hamburger button{
        font-size: 22px;
        color: #DB6B97;
        display: flex;
        align-items: center;
        background:none; 
    }
    .mobile-login > *{
        width: 22px;
        height: 22px;
    }
    .cart-btn,.wishlist-btn{
        display: none;
    }
    .mobile-login{
        display: block;
    }
 }
`
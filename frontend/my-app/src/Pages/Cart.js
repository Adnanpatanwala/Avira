import React from 'react';
import styled from 'styled-components';
import { FaArrowLeft } from "react-icons/fa";
import CartItem from '../Components/CartItem';
import PriceContainer from '../Components/PriceContainer'
import { useCartContext } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom'; 
import Im from "../Images/Demins.svg"
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Cart = () => {
    const {cart,totalAmount,totalItems} = useCartContext();
    // const item =  {Im,size:"small",color:"red",desp:"hello kem cho",title:"red tshirt",price:200,amount:1};
    const navigate  = useNavigate();

if(cart.length<1){
    return <Wrapper>
    <div className='empty-cart'>
    <h2 className='h-cart-empty'>0 Items in the cart</h2>
    <div className='empyt-btn-container'>
    <Link to='/shop' className='empty-btn'>continue shopping</Link>
    </div>
    </div>
    </Wrapper>
}



  return ( 
    <Wrapper className='global-container'>
        <div className="cart-container">
            <div className="leftside-cart">
                <div className="header-cart">
                <button onClick={()=>navigate(-1)}><FaArrowLeft /></button>
                <h2>ORDER SUMMARY</h2>
                <li>{totalItems} Items</li>
                </div>
                
                <div className="listOfitems">
                    {
                        cart.map((item,index)=><CartItem key={item.id} item={item}/>)
                    }  
                </div>


            </div>
            <div className="rightside-cart">
            <div className="delivery-alert">
                <h3>Yay! No Delivery Charge on this order.</h3>
            </div>


                    <div className="coupon">
                    <h5>Have a Coupon?</h5>
                    <div className="coupon-input">
                    <input type="text" placeholder='Enter Coupon Code' />
                    <button>Apply</button>
                    </div>
                </div>


                <PriceContainer totalAmount={totalAmount} totalItems={totalItems}/>
                <div>
            <Link to="/cart/ordersummary" className="order-btn">Continue <FaArrowRight /></Link>
        </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default Cart;
const Wrapper  = styled.div`

 
 
.cart-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 30px;
}
.header-cart{
    display: flex;
    align-items: center;
    gap: 30px;
    padding-bottom: 10px;
    h2{
        font-size: 20px;
        font-weight: 600;
    }
    li{
        color: #DB6B97;
    }
    button{
        font-size: 20px; 
        display: flex;
        align-items: center;
    }
}
.order-btn {
    color: white;
    width: 100%;
    background-color: #2D2D2D;
    align-items: center;
    display: flex;
    justify-content: center;
    font-weight: 400;
    border-radius: 8px;
    padding: 6px 0px;
    gap: 10px;
    font-size: 16px;
    text-decoration: none;
}
.listOfitems{
    height: calc(100vh - 165px);
    overflow-y: auto;
}
.rightside-cart{
    padding: 0px 50px;
}
.coupon{
    margin: 20px 0px;
    h5{
        font-size: 15px;
        font-weight: 300;
        margin-bottom: 10px;
    }
    input{
        background-color: #F6F6F6;
        border-radius: 8px;
        width: 100%;
        border: none;
        outline: none; 
        padding: 8px 50px 8px 20px;
        box-sizing: border-box;
    }
    .coupon-input{
        position: relative;
    }
    button{
        position: absolute;
        right: 10px;
        bottom: 8px;
    }
}
.delivery-alert{
    padding: 10px;
    background-color: #F6F6F6;
    margin-bottom: 30px;
}
.delivery-alert h3{
    font-weight: 500;
    text-align: center;
}

.empty-cart{
    color: white;
    height: calc(100vh - 90.55px);
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2{
        color: #2D2D2D;
        font-weight: 400;
        font-size: 25px;
        text-align: center;
    }
    .empty-btn{  
        margin-top: 20px; 
        text-decoration: none;
        text-transform: capitalize;
        background-color: #DB6B97;
        color: white;
        padding: 10px 20px;
        border-radius: 20px;
    }
    .empyt-btn-container{
        display: flex;
        justify-content: center;
    }
}

@media screen and (max-width:767px){
    .cart-container{
        display: block;
        margin-top: 15px;
    } 
    
    .header-cart h2{
        font-size: 15px;
    }
    .header-cart {
        gap: 10px;  
    }
    .header-cart button {
        font-size: 15px;
    }
    .header-cart li{
        font-size: 14px;
    }
    .rightside-cart{
        padding: 0px;
    }
    .delivery-alert{
        margin-bottom: 10px;
    }
    .delivery-alert h3{
        font-size: 14px;
    }
    .coupon{
        margin: 8px 0px;
    }
    .coupon h5{
        font-size: 12px;
    }
    .coupon input{
        padding: 5px 50px 5px 20px;
        font-size: 12px;
    }
    .coupon button{
        font-size: 12px;
    }
    .listOfitems{
        height: 300px;
    }
   
}



`
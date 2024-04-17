import React from 'react';
import styled from 'styled-components';
import { FaArrowLeft } from "react-icons/fa";
import CartItem from '../Components/CartItem';
import PriceContainer from '../Components/PriceContainer'
import { useCartContext } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const {cart,totalAmount,totalItems} = useCartContext();
    const navigate  = useNavigate();
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
`
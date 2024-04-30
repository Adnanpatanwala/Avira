import React from 'react'
import Address from '../Components/Address'
import styled from 'styled-components'
import CartItem from '../Components/CartItem'
import Im from "../Images/Demins.svg" 
import SummaryCard from '../Components/SummaryCard'
import { useCartContext } from '../Context/CartContext'
import PriceContainer from '../Components/PriceContainer'

const OrderSummary = () => {
    const {totalAmount, totalItems,addAddress} = useCartContext(); 
    const item = {totalItems,totalAmount};
  return (  
    <Wrapper> 
        <div className="address-container">

      <div className="cart-container">
      <div className="rightside-cart">
                <div className="header-cart"> 
                    <h2>Select Address</h2> 
                </div>
                
                <div className="listOfitems"> 
                    <Address/>   
                </div>
            </div>
            <div className="leftside-address"> 
                <div className="listOfitems">  
                <PriceContainer {...item}/>
                </div>
            <div className="checkout-btn-container">
            <button className='checkout-btn'>Proceed to Payment</button>
        </div>
            </div>
             
            </div>
        </div>
    </Wrapper>
  )
}

export default OrderSummary;

const Wrapper = styled.div`
.leftside-address{
     
    padding:0px 20px;
} 
.address-container{
    .items-container{
        box-shadow: none;
    }
    .cart-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0px 20px;
    margin-top: 30px;
    padding: 10px;
} 
.rightside-cart .listOfitems{
    height: calc(100vh - 205px);
    overflow-y: auto;
}
.header-cart{
    display: flex;
    align-items: center;
    gap: 30px;
    margin-left: 10px;
    padding-bottom: 10px;
    h2{
        font-size: 20px; 
        font-weight: 500;
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
.checkout-btn-container{
    padding: 5px;
    background-color: white;
}
.checkout-btn-container .checkout-btn{
    background-color: #2D2D2D;
    padding: 8px;
    width: 100%;
    border-radius: 10px;
    color: white;
    font-size: 16px;
    margin: auto;
    display: block; 
}

.viewall{
    font-size: 12px !important;
    color: #DB6B97;
}
@media screen and (max-width:767px){
     
    .cart-container{
        display: block;
        margin: 10px;
        margin-top: 10px;
        padding: 0px;
    }
    .header-cart {
        margin: 0px; 
        justify-content: space-between;
        padding: 10px 0px;
}
.header-cart h2{
    font-size: 14px;
} 
.header-cart li{
    font-size: 12px;
} 
 .checkout-btn {
    width: 100% !important;
    
}
.checkout-btn-container{
    position: sticky;
    left: 0px;
    bottom: 0px;

}
.leftside-item{
    width: 100%;
    max-width: 80px;
    height: 50px;
}
.items-container{
    gap: 10px;
}
.rightside-item h4{
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 14px;
}
.rightside-item .info{
    font-size: 12px;
}
.sizeandq{
    gap: 15px;
    margin: 3px 0px;
}
.sizeandq .common{
    font-size: 12px;
}
.price{
    margin: 3px 0px;
}
.price h5{
    font-size: 14px;
}
.deliveryBy h4{
    font-size: 10px;
}
.addressname label{
    font-size: 10px;
}
.address-field p label{
    font-size: 10px;
}
.addressname h5,.right-address p{
    font-size: 12px;
}
.address-label{
    padding: 15px;
    padding-left: 0px;
    grid-template-columns: 12% 88%;
}
}








}

`

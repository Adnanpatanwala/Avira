import React from 'react'
import Address from '../Components/Address'
import styled from 'styled-components'
import CartItem from '../Components/CartItem'
import Im from "../Images/Demins.svg" 

const About = () => {
    const item =  {Im,size:"small",color:"red",desp:"hello kem cho",title:"red tshirt",price:200,amount:1};
  return (  
    <Wrapper> 
        <div className="address-container">

      <div className="cart-container">
            <div className="leftside-address">
                <div className="header-cart">
                {/* <button onClick={()=>navigate(-1)}><FaArrowLeft /></button> */}
                <h2> ORDER SUMMARY</h2>
                <li>1 Items</li>
                </div>
                
                <div className="listOfitems">
                      <CartItem item={item}/> 
                      <CartItem item={item}/> 
                      <CartItem item={item}/> 
                </div>
            </div>
            <div className="rightside-cart">
                <div className="header-cart"> 
                    <h2>Select Address</h2> 
                </div>
                
                <div className="listOfitems"> 
                    <Address/> 
                    <Address/> 
                    <Address/> 
                    <Address/> 
                </div>
            </div>
            </div>
            <div className="checkout-btn-container">
            <button className='checkout-btn'>Proceed to Payment</button>
        </div>
        </div>
    </Wrapper>
  )
}

export default About;

const Wrapper = styled.div`
.address-container{
    .cart-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0px 20px;
    margin-top: 30px;
    padding: 10px;
}
.leftside-address .listOfitems,.rightside-cart .listOfitems{
    height: calc(100vh - 240px) !important;
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
.listOfitems{
    height: calc(100vh - 165px);
    overflow-y: auto;
}
.checkout-btn-container{
    padding: 5px;
    background-color: white;
}
.checkout-btn-container .checkout-btn{
    background-color: #2D2D2D;
    padding: 8px;
    width: 200px;
    border-radius: 10px;
    color: white;
    font-size: 16px;
    margin-left: auto;
    display: block;
    margin-right: 30px;
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

import React from 'react'
import styled from 'styled-components'
import Image from '../Images/image 13.svg'
import { TbTruckDelivery } from "react-icons/tb";
import Img from "../Images/Demins.svg";

const CartItem = (item) => {
    // console.log(item);
    const {image,size="small",color,desp,title,price,amount=1} = item.item;
    
  return ( 
    <Wrapper >
        <div className="items-container">
            <div className="leftside-item">
                <img src={image} alt="" />
            </div>
            <div className="rightside-item">
                <h4>{title}</h4>
                <p className="info">{desp}</p>
                <div className="sizeandq">
                    <div className="common">
                        <p>Size : {size} </p>
                    </div>
                    <div className="common">
                        <p>Qty : {amount} </p>
                    </div>
                </div>
                    <div className="price">
                        <h5>Rs : {price*amount}</h5>
                    </div>
                    <div className="deliveryBy">
                        <span><TbTruckDelivery /></span>
                        <h4>Delivery by : 23 Jan 2024</h4>
                    </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default CartItem
const Wrapper = styled.div`
.leftside-item{
    width: 130px;
    height: 160px;
}
.leftside-item img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.items-container{
    display: grid;
    grid-template-columns: 20% 75%;
    box-shadow: 0 0 1px #737373;
    margin: 20px 10px;
    padding: 20px;
    border-radius: 10px;
    gap: 40px;
} 
.rightside-item{
    h4{
        text-transform: capitalize;
        margin: 5px 0px;
    }
    .info{
        font-size: 14px;
    }
    .common{
        background-color: #F6F6F6;
        display: inline-block;
        font-weight: 600;
        padding: 3px 8px;
        font-size: 14px;

    }
    .sizeandq{
        display: flex;
        gap: 30px;
        font-size: 14px;
        margin: 8px 0px;
    } 
    .deliveryBy{
        display: flex;
        gap: 5px;
        align-items: center;
        h4{
            font-size: 14px;
            font-weight: 300;
        }
        span{
            align-items: center;
            display: flex; 
            font-size: 18px; 
            color: gray;
        }
    }
}
.price{
    margin: 8px 0px;
    color: #DB6B97;
    h5{
        font-size: 16px;
        font-weight :500 ;
    }
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
.rightside-item .sizeandq{
    gap: 15px;
    margin: 3px 0px;
}
.rightside-item .sizeandq .common{
    font-size: 12px;
}
.price{
    margin: 3px 0px;
}
.price h5{
    font-size: 14px;
}
 .rightside-item .deliveryBy h4{
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
`
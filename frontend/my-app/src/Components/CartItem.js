import React from 'react'
import styled from 'styled-components'
import Image from '../Images/image 13.svg'
import { TbTruckDelivery } from "react-icons/tb";

const CartItem = (item) => {
    // console.log(item);
    const {image,size="small",color,desp,title,price,amount=1} = item.item;
    
  return ( 
    <Wrapper>
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
    object-fit: cover;
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
`
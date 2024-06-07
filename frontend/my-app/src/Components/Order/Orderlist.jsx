import React from 'react'
import styled from 'styled-components'; 
import { BsBoxSeam } from "react-icons/bs";

const Orderlist = ({_id:id,date,totalItems}) => {
  return (
    <Wrapper>
       <div className="order-list">
        <div className='orderlist-content'>
        <div className="orderlist-left">
        <BsBoxSeam />
        </div>
        <div className="orderlist-right">
          <p className='orderid'>#{id}</p>
          <p>{totalItems} items</p>
          <p className='date-order-list'>{date.substring(0,date.indexOf('T'))}</p>
        </div>
        </div>
        <div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Orderlist;

const Wrapper = styled.div`
.ord-label{
    font-size: 14px;
    font-weight: 500;
}
.orderid{
    font-size: 18px !important;
    font-weight: 700;
}
.order-list:hover{
  box-shadow: 0px 0px 5px #ccc;
  background-color: #f4f3f3;
   
}
.order-list{
    padding: 8px 10px;
    box-shadow: 0px 0px 3px #ccc;
    border-radius: 10px;
    margin: 10px 25px; 
}
    .date-order-list{
  text-align: right; 
}
.orderlist-right{
    width: -webkit-fill-available;
}
.orderlist-right p{
  font-size: 14px;
  font-weight: 500;
  color: black;
}
.orderlist-left{ 
    font-size: 30px; 
    display: flex;
    align-items: center;
    justify-content: center;
}
  .orderlist-content{
    display: flex;
    gap: 20px;
    align-items: center;
  }

  @media screen and (max-width:767px){
    .order-list{
        margin: 10px 5px;
        padding: 5px 8px;
    }
     
    .orderid{
        font-size: 14px !important;
    }
    .ord-label,.orderlist-right p{
        font-size: 12px;
    }
    .orderlist-content{
        gap: 10px;
    }
  }


`

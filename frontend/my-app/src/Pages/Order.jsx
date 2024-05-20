import React from 'react'
import styled from 'styled-components';
import OrderItem from '../Components/Order/OrderItem';
 

const Order = () => {
  return (
    <Wrapper> 
      <div className="global-container">
      <div className="order-header">
        <h2>Orders</h2>
        <div className="date-selector">
          <div className="start">
          <label htmlFor="start-date">Start-date :</label>
        <input type="date" name="start-date" id="" />
          </div>
          <div className="end">
          <label htmlFor="start-date">End-date :</label>
        <input type="date" name="end-date" id="" />
          </div>
        </div>
      </div>

      <div className="order-container">
        <OrderItem/>
        <OrderItem/>
        <OrderItem/>
        <OrderItem/>
      </div>

      </div>
    </Wrapper>
  )
}

export default Order;

const Wrapper = styled.div`
  
.order-header{
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
  border-bottom: 1px solid #212529;
  h2{
    font-weight: 500;
    color: #212529;
  }
}
.date-selector{
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 10px;
}
.end,.start{
  label{
    display: block;
    font-weight: 500;
  }
  input{
    font-size: 12px;
  }
}
`

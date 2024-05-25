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
        <input type="date" name="start-date" id="" placeholder='Start-date'/>
          </div>
          <div className="end">
          <label htmlFor="start-date">End-date :</label>
        <input type="date" name="end-date" id="" placeholder='End-data'/>
          </div>
        </div>
      </div>

      <div className="order-container">
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
@media screen and (max-width:767px){
  .order-item-container{
    display: block;
    padding: 10px 5px;
  }
  .right-order{
    gap: 0px;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .status-order label, .total-item label, .payment-order label{
    font-size: 12px;
  }
  .status-order span, .total-item span, .payment-order span{
    font-size:12px;
  }
  .order-header{
    display: block;
  }
  .prd-tb{
    font-size: 12px;
    min-width: 55vw;
  }
  .order-header{ 
  h2{ 
    font-size: 18px;
  }
}
.order-date{
  font-size: 12px;
}
.prd-table{
  th{
    font-size: 13px;
  }
}
.prd-table tr td{
  font-size: 12px;
}
  
}
`

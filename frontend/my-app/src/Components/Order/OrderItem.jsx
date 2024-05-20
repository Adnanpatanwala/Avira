import React from 'react'
import styled from 'styled-components'
import OrderPrdItem from './OrderPrdItem'

const OrderItem = () => {
  return (
    <Wrapper>
        <div className="order-item-container">
      <div className="order-item">
        <div className="order-date">
            <p>Date : 26 jan 2024</p>
        </div>
        <div className="order-items">
        <table className='prd-table'>
            <thead>
                <tr>
                    <th></th>
                    <th>Product</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
            <OrderPrdItem/>
            <OrderPrdItem/>
            <OrderPrdItem/>
            <OrderPrdItem/>
            <tr>
                <td colSpan='2'>tax :</td>
                <td>₹50</td>
            </tr>
            <tr>
                <td colSpan='2'>shipping fee :</td>
                <td>₹50</td>
            </tr>
            <tr>
                <td colSpan='2'>Discount :</td>
                <td>₹50</td>
            </tr>
            <tr className='total-order'>
                <td colSpan='2'>Total :</td>
                <td>₹500</td>
            </tr>
            </tbody>
        </table>
        </div>
        <div className="order-address">
            <label htmlFor="address-order">Address :</label>
            <p name="address-order">
                2/260/3433,TAgore Nagar,Vikhroli east,Mumbai:400083,Maharashtra,India
            </p>
        </div> 
      </div>
      <div className='right-order'>
        <div className="total-item">
            <label htmlFor="items">Total number of Items : </label>
            <span>2</span>
        </div>
        <div className="status-order">
            <label htmlFor="status">Status : </label>
            <span style={{color:"green"}}>Delivered</span>
        </div>
        <div className="payment-order">
            <label htmlFor="">Payment : </label>
            <span style={{color:"green"}}>Payed</span>
        </div>
      </div>
      </div>
    </Wrapper>
  )
}

export default OrderItem

const Wrapper = styled.div`
.right-order{
    display: flex;
    align-items: center;
    gap: 30px;
}
.status-order label,.total-item label,.payment-order label{
    font-size: 14px;
    font-weight: 400;
}
.status-order span,.total-item span,.payment-order span{
    font-size: 18px;
    font-weight: 600; 

}
.prd-table th{
    text-align: left;
} 
.prd-table td{
    padding: 0px 5px;
}
.prd-table{
    font-size: 14px;
}
.total-order{
    font-size: 14px;
    font-weight: 600;
}

.order-item-container{
    border: 2px solid #DB6B97;
    border-radius: 20px;
    padding: 10px 25px;
    position: relative;
    margin: 25px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.order-date{
    font-size: 14px;
    position: absolute;
    top: -15px; 
    left: 25px;
    background-color: #DB6B97;
    border-radius: 20px;
    padding: 2px 8px;
    font-weight: 500;
    color: white;
}
.order-address{
    p{
        font-size: 12px;
        display: inline;
        margin-left: 5px;
    } 
    label{
        font-size: 12px;
    }
}
    

`
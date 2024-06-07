import React from 'react'
import styled from 'styled-components'
import OrderPrdItem from './OrderPrdItem'
import { useOrderContext } from '../../Context/OrderContext'

const OrderItem = () => {
  const {singleOrder} = useOrderContext();
  const {address,orderItem,shippingFee,total,tax,orderInfo,createdAt}  = singleOrder
  const {address1,address2,city,country,state,pincode}=address;
  return (
    <Wrapper>
        <div className="order-item-container">
      <div className="order-item">
        <div className="order-date">
            <p>Date : {createdAt.substring(0,createdAt.indexOf('T'))}</p>
        </div>
        <div className="order-items">
        <table className='prd-table'>
            <thead>
                <tr>
                    <th colSpan={2}>Product</th>
                     <th>Price</th>
                </tr>
            </thead>
            <tbody>
              {
              orderItem.map((item,index)=>{
                return  <OrderPrdItem key={index} {...item}/> 
              })
              }
                 
            <tr>
                <td colSpan='2'>tax :</td>
                <td>₹{tax}</td>
            </tr>
            <tr>
                <td colSpan='2'>shipping fee :</td>
                <td>₹{shippingFee}</td>
            </tr> 
            <tr className='total-order'>
                <td colSpan='2'>Total :</td>
                <td>₹{Number(total)/100}</td>
            </tr>
            </tbody>
        </table>
        </div>
        <div className="order-address"> 
            <p name="address-order">
            Address :  {address1+" "+address2+", "+city+' : '+pincode+', '+state+', '+country } 
            </p>
        </div> 
      </div>
      <div className='right-order'>
      
        <div className="status-order">
            <label htmlFor="status">Status : </label>
            <span style={{color:"green"}}>{orderInfo.status}</span>
        </div>
        <div className="payment-order">
            <label htmlFor="">Payment : </label>
             {Number(orderInfo.amount_paid)==0?<span style={{color:"red"}}>pending</span>:<span style={{color:"green"}}>"payed"</span>}
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
    margin-left: 5px;
    flex-wrap: wrap;
    margin: 6px 0px;
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
    padding: 0px 5px;
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
    border-radius: 20px;
    padding: 10px 25px; 
    margin: 25px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.order-date{
    font-size: 14px; 
    background-color: #DB6B97;
    border-radius: 20px;
    padding: 2px 8px;
    font-weight: 500;
    color: white; 
    width: fit-content;
    margin: 10px 0px;
}
.order-address{
    margin-top: 15px;
    p{
        font-size: 12px; 
        margin-left: 5px; 
        line-break: anywhere;
    } 
    label{
        font-size: 12px;
    }
}

@media screen and (max-width:767px){
  .order-item-container{
    display: block;
    padding: 10px 5px;
  }
  .right-order{  
    row-gap :10px ;
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
 
.prd-table{
  th{
    font-size: 13px;
    padding: 6px 0px;
  }
}
.prd-table tr td{
  font-size: 12px;
}
  
}
    

`
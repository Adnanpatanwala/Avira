import React, { useEffect } from 'react'
import styled from 'styled-components';
import OrderItem from '../Components/Order/OrderItem';
 
import Orderlist from '../Components/Order/Orderlist';
import { useOrderContext } from '../Context/OrderContext';
import Loading  from '../Components/Loading'
import {NavLink} from 'react-router-dom'
const Order = () => {
  const {getOrder,orderLoading,order} = useOrderContext();

  useEffect(()=>{
    getOrder();
  },[])

  if(orderLoading){
    return <div className='backloader'>
      <Loading/>
    </div>
  }

  if(order.length<1){
    return <div className='backloader'>
      No orders present...
    </div>
  }
  
  return (
    <Wrapper> 
      <div className="global-container">
      <div className="order-header">
        <h2>Orders</h2>

      </div>

       

      <div>
        {
          order.map((item)=>{
           return  <NavLink to={`/order/${item._id}`} className="navlink-order">
             <Orderlist key={item._id} {...item}/>
            </NavLink>
          })
        } 
      </div>
 

      </div>
    </Wrapper>
  )
}

export default Order;

const Wrapper = styled.div`

.navlink-order{
  text-decoration: none;
  color: black;
}
 
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

@media screen and (max-width:767px){
   
  .order-header{
    display: block;
    padding: 5px 0px;
    h2{
      font-size: 16px;
    }
  }
  
  
}
`

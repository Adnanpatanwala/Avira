import React from 'react'
import styled from 'styled-components';

const OrderPrdItem = ({name,price,amount}) => {
  return (
    <Wrapper> 
        <td className='cust-tb'>{amount} x </td>
        <td className='prd-tb'>  {name}</td>
        <td className='cust-tb'>₹{price}</td>
    </Wrapper>
  )
}

export default OrderPrdItem;

const Wrapper = styled.tr`
     .prd-tb{ 
        min-width: 200px;
        max-width: 350px;
     }
    td{
        padding: 5px;
    } 
    .cust-tb{
        display: flex;
    }
`

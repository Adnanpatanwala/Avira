import React from 'react'
import styled from 'styled-components';

const OrderPrdItem = () => {
  return (
    <Wrapper> 
        <td className='cust-tb'>2 x </td>
        <td className='prd-tb'> Red T-shirt lorem15</td>
        <td className='cust-tb'>₹200</td>
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

import React from 'react'
import styled from 'styled-components'
import { FaPlus, FaMinus } from 'react-icons/fa'

const QuantityBtn = ({decrease,increase,amount}) => {
  return(
    <Wrapper> 
    <div className="qtybtn">
      <button className='amount-btn' type='button' onClick={decrease}><FaMinus/></button>
      <h3 className='amount'>{amount}</h3>
      <button className='amount-btn' type='button' onClick={increase}><FaPlus/></button>
    </div>
      
    </Wrapper>
  )
}

const Wrapper = styled.div`
    color:#212529;
    margin-top: 30px;
     
.qtybtn{
  display: grid;
  width: 120px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h3 {
    margin-bottom: 0;
  }
}
  .amount-btn {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #212529;
    border-radius: 6px;
  } 
`

export default QuantityBtn

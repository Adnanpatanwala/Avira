import React, { useEffect } from 'react'
import styled from 'styled-components'
import OrderItem from '../Components/Order/OrderItem'
import { useOrderContext } from '../Context/OrderContext'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../Components/Loading'

const SingleOrderPage = () => {
  const {getSingleOrder,singleOrderLoading} = useOrderContext();
  const {id} = useParams();
  const navigate = useNavigate();
  useEffect(()=>{
    getSingleOrder(id);
  },[])

  if(singleOrderLoading){
    return <div className='backloader'>
      <Loading/>
    </div>
  }

  return (
    <Wrapper>
      <div className="order-container global-container">
        <OrderItem/> 
      </div>
    </Wrapper>
  )
}

export default SingleOrderPage

const Wrapper = styled.div`
    

`

import React, { useRef } from 'react'
import { useCartContext } from '../../Context/CartContext'
import Address from '../Address'; 
import Loading from '../Loading';
import styled from 'styled-components';

const Leftside = ({ setAddress }) => {
    const { address, loading,handleDivClick } = useCartContext(); 
    
  
    

    if (loading) {
        return <div className="backloader"><Loading /></div>
    }
    if(address.length<1){
        return <Wrapper>
        <h3 className='heading-address'>No Address Present</h3>
        </Wrapper>
    }

    return (
        <Wrapper>


            {
                address.map((item) => { 
                    return <Address {...item}  onClick={()=>handleDivClick({item})}/>
                })
            }
        </Wrapper>
    )
}

export default Leftside

const Wrapper = styled.div`
    height: calc(100vh - 200px);
    overflow: auto;
   

    .heading-address{ 
        font-size: 15px;
        font-weight: 400;
        margin-top: 50px;
        display: flex;
        justify-content: center;
    }


`
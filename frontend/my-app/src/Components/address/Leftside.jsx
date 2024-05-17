import React, { useRef } from 'react'
import { useCartContext } from '../../Context/CartContext'
import Address from '../Address';
import Loading from '../Loading';
import styled from 'styled-components';

const Leftside = ({ setAddress }) => {
    const { address, loading, error,addSelectedAddress } = useCartContext();




    if (loading) {
        return <div className="backloader"><Loading /></div>
    }

    if (error) {
        return   <Wrapper>
            <div className="error-container">
            <p className='error-msg'>{error.msg}</p>
            <p className='error-statuscode'>{error.statuscode}</p>
            </div>
        </Wrapper>       
    }

    if (address.length < 1) {
        return <Wrapper>
            <h3 className='heading-address'>No Address Present</h3>
        </Wrapper>
    }

    return (
        <Wrapper>
            {
                address.map((item) => {
                    return <Address {...item} />
                })
            }
        </Wrapper>
    )
}

export default Leftside

const Wrapper = styled.div`
    height: calc(100vh - 200px);
    overflow: auto;
    

   .error-msg{
    font-size: 14px;
    color: red;
    text-transform: capitalize;
    font-weight: 400;
    position: relative; 
    margin-left: 45px;
}
.error-statuscode{
    position: relative; 
       font-size: 14px;
       color: #c10000;
       text-transform: capitalize;
       font-weight: 800;
       margin-left: 95px;
   }

   .error-statuscode::before{
    content: 'Statuscode :';
    position: absolute;
    left: -95px;
    top: 0px;
    width: 100%;
    height: 100%;
    font-weight: 400;
}
.error-msg::before{ 
       content: "Error :";
       position: absolute;
       left: -45px;
       top: 0px;
       width: 100%;
       height: 100%;
       font-weight: 400;
   }
    .heading-address{ 
        font-size: 15px;
        font-weight: 400;
        margin-top: 50px;
        display: flex;
        justify-content: center;
    }


`
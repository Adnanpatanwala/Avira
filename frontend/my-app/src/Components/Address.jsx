import React from 'react'
import { useState,useRef } from 'react'
import styled from 'styled-components' 

const Address = () => {
    const [selectedOption, setSelectedOption] = useState(false);
  const radioRef = useRef(null);

  const handleDivClick = () => {
    radioRef.current.click();
  };

   
    
  return ( 
    <Wrapper> 
        <label  className='address-label' onClick={handleDivClick}>
        <div className="left-address" for="address">
        <input
            type="radio"
            name="address"
            id="address"
            className='address'
            ref={radioRef} 
          />
        </div>
        <div className="right-address">
            <div className="addressname">
            <label>Name : </label>
            <h5>Adnan Patnawala</h5>
            </div>
            <div className="address-field">
            <p>
                <label >Addresss :</label>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam esse, commodi quis natus voluptas numquam hic illo ipsam omnis, aut ipsum illum a minus reprehenderit.etur adipisicing elit. Quibusdam esse, commodi quis natus voluptas numquam hic illo ipsam omnis, aut ipsum illum a minus reprehenderit.</p>
            </div>
            <div className="addressname">
            <label>City : </label>
            <h5>Mumbai</h5>
            </div>
            <div className="addressname">
            <label>State : </label>
            <h5>Maharashtra</h5>
            </div>
            <div className="addressname">
            <label>Pincode : </label>
            <h5>400083</h5>
            </div>
            <div className="addressname">
            <label>Country : </label>
            <h5>India</h5>
            </div>
        </div>
        </label>
 
    </Wrapper>
  )
}

export default Address
const Wrapper = styled.div`
.address-label{
    margin: 20px 10px;
    padding: 20px;
    padding-left: 0px;
    box-shadow: 0 0 1px #737373;
    border-radius: 20px;
    display: grid;
    grid-template-columns: 10% 90%;
    overflow: auto;
    cursor: pointer;
    .left-address{
        display: block;
        margin: 0px auto ;
        input[type=radio].address{
            accent-color: #DB6B97;
        }
    }
    .right-address{
        p{
            font-size: 14px;
        }
    }
}
.addressname label{
    font-size: 12px;
    font-weight: 400;
    display: inline-block;
}
.addressname h5{
    display: inline-block;
    margin-left: 5px;
    font-weight: 500;
    font-size: 14px;
}
.address-field{
    p{
        
        label{
            display: inline-block;
            font-weight: 400;
            font-size: 12px;
            margin-right: 5px;
        }
        font-weight: 500;
        
    }
}
.address{  
    width: 25px;
}
`
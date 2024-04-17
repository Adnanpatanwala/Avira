import React from 'react'
import styled from 'styled-components'

const ToggleBtn = ({check,handleChange}) => {
  return ( 
    <Wrapper>
        <input type="checkbox" checked={check} onChange={handleChange}/>
        <span className='slider'></span>
    </Wrapper>
  )
}

export default ToggleBtn

const Wrapper = styled.label`
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    input{
        opacity: 0;
        width: 0;
        height: 0;
    }
    .slider{
        position: absolute;
        border-radius: 50px;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: 0.4s;
    }
    .slider::before{
        position: absolute;
        content: "";
        height: 15px;
        width: 15px;
        left: 3.5px;
        bottom: 2.1px;
        background-color: white;
        transition: 0.4s;
        border-radius: 50%;

    }
    input:checked + .slider::before{
        transform: translateX(19px);
    }
    input:checked + .slider{
        background-color: #DB6B97;
    }
`
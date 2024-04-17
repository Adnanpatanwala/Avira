import React from 'react'
import styled from 'styled-components'

const Loading = () => {
  return ( 
    <Wrapper>
        <div className="loading"></div>
    </Wrapper>
  )
}

export default Loading
const Wrapper = styled.div`

    .loading{
        width: 50px;
        height: 50px;
        border: 8px solid #d3d1d1;
        border-top: 8px solid #DB6B97;
        border-radius: 50%;
        animation: rotates 1s linear infinite;
    }
    @keyframes rotates {
        100%{
            transform: rotate(360deg);
        }
    }
`
import React from 'react'
import styled from 'styled-components';

const SummaryCard = ({Im,size,color,desp,title,price,amount}) => {
  return (
    <Wrapper> 
        <div className='summary-container'>

<div>

        <div className='sumarry-img'>
        <img src={Im} alt="image" />
            <h4>{title}</h4>
        </div>
        <div className="summary-desp">
            <div className="summary-size">
                <p>size : {size}</p>
                <p>amount : {amount}</p>
                <div className='color-summary'>color : <span className='summary-color'></span></div>
            </div>
        </div>
</div>
            <p className='price-summary'>{price}</p>
        </div>
        
    </Wrapper>
  )
}

export default SummaryCard;
const Wrapper = styled.div`
margin-top: 10px;
border-bottom: 1px solid #ccc;
.summary-container{
    display: grid;
    grid-template-columns: 80% 20%;
}
    .sumarry-img{
        display: flex;
        gap: 10px;
        align-items: center;
        text-transform: capitalize;

        h4{
            font-weight: 500;
        }
        img{
            width: 40px;
            height: 30px; 
            object-fit: contain;
        }
    }

    .summary-color{
        display: block;
        width: 15px;
        height: 15px;
        border-radius:50%;
        background-color: aquamarine;
    }

    .summary-size{
        display: flex;  
        gap: 10px;
        flex-wrap: wrap;
        font-size: 12px;
        margin: 5px;
        
    }

    .color-summary{
        display: flex;
        align-items: center;
        gap: 10px;
    }


.price-summary{
    font-size: 14px; 
    display: block; 
    margin: auto;
}
`

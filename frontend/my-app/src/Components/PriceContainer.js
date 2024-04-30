import React from 'react'
import styled from 'styled-components'
 
 


const PriceContainer = ({totalItems,totalAmount}) => {
  return (
    <Wrapper>

        <div className="heading-price">
            <h3>PRICE DETAILS ( {totalItems} ITEMS )</h3>
        </div>

        <div className="calculation">
            <div className="row">
                <div className="left-cl"><h4>Total  MRP</h4></div>
                <div className="right-cl"><h4>Rs {totalAmount}</h4></div>
            </div>
            <div className="row">
                <div className="left-cl"><h4>Discount on MRP</h4></div>
                <div className="right-cl"><h4>Rs {totalAmount - (totalItems*100)}</h4></div>
            </div>
            <div className="row">
                <div className="left-cl"><h4>Coupon Discount</h4></div>
                <div className="right-cl"><h4>Rs 0</h4></div>
            </div>
            <div className="row">
                <div className="left-cl"><h4>Delivery Charge</h4></div>
                <div className="right-cl"><h4>Free</h4></div>
            </div>
        </div>

 

    </Wrapper>
  )
}

export default PriceContainer
const Wrapper = styled.div` 
.heading-price{
    h3{
        font-weight: 500;
    }
    margin-bottom: 20px;
}
.row{
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}
.left-cl h4,.right-cl h4{
    font-weight: 400;
    font-size: 14px;
    color: #737373;
}
.calculation:nth-child(2).right-cl h4{
    color: green;
}
.calculation:nth-child(4).right-cl h4{
    color: green;
}
 

@media screen and (max-width:767px) {
    margin-top: 10px;   
    .heading-price{
        margin-bottom: 10px;
    }
    .heading-price h3{
        font-size: 14px;
    }
    .left-cl h4,.right-cl h4{
        font-size: 12px;
    }
    .order-btn{
        position: sticky;
        bottom: 0px;
        left: 0px;
        background-color: white; 
        padding: 5px 0px;
        outline: none;
        border: none;
    }
}
 
`
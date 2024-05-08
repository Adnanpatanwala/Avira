import React from 'react'
import CartItem from '../Components/CartItem'
import styled from 'styled-components';
import {useCartContext} from '../Context/CartContext'
 
const WishList = () => {
   const {wishlist,addToCartFromWishList} = useCartContext();
  return (
    <Wrapper > 
        {
          wishlist.length<=0?
          <div className='noproduct'>
            <h2>you have not added any products :( </h2>
          </div>:
          
            <div className='wishlist-container'>
        <div className="wishlist-card">
          {
            wishlist.map((item)=>{
              const items = {item}; 
              return <CartItem key={items.id} {...items}/> 
            })
          }
        </div>
        <div className="right-container-wishlist">
          <div className="back-wishlist">
          <button className='btn-wishlist' onClick={addToCartFromWishList}>Add to cart</button>
          </div> 
        </div> 
      </div>

}
    </Wrapper>
  )
}

export default WishList;
const Wrapper = styled.div`

min-height: calc(100vh - 95px);
.noproduct{    
  margin-top: 10%; 
  /* margin: auto; */
}
 .noproduct h2{
  font-size: 18px;
  font-weight: 400;
  color: #DB6B97;
  text-align: center;
 }
.wishlist-container{
  display: grid;
  padding: 20px;
  grid-template-columns: 1fr 1fr;
}
.wishlist-card{
  overflow-y: auto;
  height: calc(100vh - 135px);
} 
.back-wishlist{ 
  text-align: center;
}
.btn-wishlist{
  padding:5px 10px;
  border-radius: 8px; 
  font-size: 16px;
  font-weight: 300;
  color: white;
  background-color: #2D2D2D;
  box-sizing: border-box; 
  margin: 10px 30px;
  width: -webkit-fill-available; 
}
`
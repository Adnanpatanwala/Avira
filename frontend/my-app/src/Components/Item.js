import React, { useState } from 'react'
import styled from 'styled-components'; 
import { HiOutlineHeart } from "react-icons/hi";
import { HiHeart } from "react-icons/hi"; 
import {useCartContext} from "../Context/CartContext";
import {Link} from 'react-router-dom'

const Item = ({image,category,title,description,price,_id:id}) => { 
    const {addTowishlist} = useCartContext();
    const data =  {image,category,title,description,price,id};
    const [fill,setFill] = useState(true);
    const handleaddtoWishList = (data) =>{
        addTowishlist(data);
        setFill(!fill);
    }

  return (
    <Wrapper>
        	<div className="product-card"> 
		<div className="product-tumb">
			<img src={image[0]} alt=""/>
		</div>
		<div className="product-details">
			<span className="product-catagory">{category}</span>
			<h4>{title}</h4> 
			<p>{description.slice(0,50)}.......</p>
		</div>
        <div className='bottom-prd'>
			<div className="product-bottom-details">
				<div className="product-price"><small>₹{Number(price)-100}</small>₹{price}</div>
				<div className="product-links">
                    <button className='wishlist' onClick={()=>handleaddtoWishList(data) }>{fill?<HiOutlineHeart/>:<HiHeart />}</button>
                    <Link className='cart' to={`/shop/${id}`}>View</Link>
				</div>
			</div>
        </div>
	</div>
    </Wrapper>
  )
}

export default Item;
const Wrapper = styled.div`  



.product-card { 
    a{
        text-decoration: none;
    } 
    max-width :300px ;
    height: 450px;
    box-shadow: 0 2px 7px #dfdfdf;
    background: #fafafa;
    
}

.badge { 
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 700;
    background: #eb3c3c;
    color: #fff;
    padding: 3px 10px;
}

.product-tumb {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 250px;
    padding: 5px;
    background: #f0f0f0;
}

.product-tumb img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.product-details {
    padding: 20px;
}

.product-catagory {
    display: block;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    color: #ccc;
    margin-bottom: 5px;
}

.product-details h4  {
    line-break: anywhere;
    font-weight: 500;
    display: block;
    margin-bottom: 5px;
    text-transform: uppercase;
    color: #363636;
    text-decoration: none;
    transition: 0.3s; 
}

.product-details h4 a:hover {
    color: #DB6B97;
}

.product-details p {
    font-size: 12px; 
    margin-bottom: 5px;
    color: #999;
}

.product-bottom-details {
    margin-top: auto;
    display: flex;
    align-items: center;
    border-top: 1px solid #eee;
    padding-top: 5px;
    padding: 10px 20px;
}
.bottom-prd{
    display: block;
    margin-top: auto;
}
 
 
.product-price {
    width: 50%;
    font-size: 18px;
    color: #DB6B97;
    font-weight: 600;
}

.product-price small {
    font-size: 80%;
    font-weight: 400;
    text-decoration: line-through;
    display: inline-block;
    margin-right: 5px;
}

.product-links { 
    display: flex;
    gap: 10px;
    align-items: center;
    margin-left: auto;
}
.wishlist{
    font-size: 25px; 
    display: flex ; 
    margin-left: auto;
    color: #4b4b4b;
} 
.cart{
    background-color: #4b4b4b; 
    font-weight: 400;
    padding: 3px 15px;
    color: white;
    border-radius: 6px;
    font-size: 15px;
}
  
`
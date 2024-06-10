import React, { useState } from 'react'
import styled from 'styled-components'; 
import { HiOutlineHeart } from "react-icons/hi";
import { HiHeart } from "react-icons/hi"; 
import {useCartContext} from "../Context/CartContext";
import {Link} from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";


const Item = ({image,category,title,description,price,_id:id,noOfRating}) => { 
    const {addTowishlist} = useCartContext();
    const data =  {image,category,title,description,price,id};
  
    const [fill,setFill] = useState(true);
    const handleaddtoWishList = (data) =>{
        addTowishlist(data);
        setFill(!fill);
    }

  return (
    <Wrapper>
        	<Link className="product-card" to={`/shop/${id}`}> 
            <div className="rating"><FaStar/>{noOfRating}/5</div>
		<div className="product-tumb">
			<img src={image[0]} alt=""/>
		</div>
		<div className="product-details">
			<span className="product-catagory">{category}</span>
			<h4>{title}</h4>  
		</div>
        <div className='bottom-prd'>
			<div className="product-bottom-details">
				<div className="product-price"><small>₹{Number(price)-100}</small>₹{price}</div>
				<div className="product-links">
                    <span className='cart'><FaArrowRight/></span>
				</div>
			</div>
        </div>
	</Link>
    </Wrapper>
  )
}

export default Item;
const Wrapper = styled.div`  

width: 100%;
height: 100%;

.rating{
    position: absolute;
    right: 10px;
    top: 10px;  
    background-color: #2D2D2D;
    opacity: 0.7;
    color: white;
    font-size: 12px;
    z-index: 3;
    padding: 2px 8px; 
    border-radius: 20px;
    display: flex;
    gap: 5px;
    align-items: center;
    
}


.product-card { 
    a{
        text-decoration: none;
    }  
    text-decoration: none;
    box-shadow: 0px 5px 9px #dfdfdf;
    background-color: #fafafa !important;
    display: block; 
    z-index: 2;
    position: relative;
    
}
.product-card:hover{  
    .cart{
    background-color: #DB6B97; 
    border :1px solid #DB6B97 ;
    color: white; 
    transform: rotate(-30deg); 
}
  img{
    transform: scale(1.2);
}
.product-tumb{
    overflow: hidden;
    background-color: white;
}
.product-catagory{  
    background-color: #DB6B97; 
    color: white;
    box-shadow: 0px 0px 3px #DB6B97;
}
    
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

}

.product-tumb img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.product-details {
    padding: 10px 20px 0px 20px; 
    background-color: white;
}

.product-catagory {
    display: inline-block;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    color: #727070;
    margin-bottom: 5px; 
    box-shadow: 0px 0px 2px #727070;
    padding: 2px 5px;
    border-radius: 10px;
    box-sizing: border-box;
     

}

.product-details h4  { 
    font-weight: 500;
    display: block;
    padding: 2px;
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
    padding-top: 5px;
    padding: 0px 20px 20px 20px;
    background-color: white ;
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
    background-color: transparent;
    border :1px solid #2D2D2D ;
    color: #2D2D2D;
    font-weight: 400;
    padding: 8px; 
    border-radius: 50%;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center; 
    box-sizing: border-box;
    transition: 0.6s;
}
 
  
`
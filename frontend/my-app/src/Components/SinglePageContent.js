import React, { useState } from "react";
import styled from "styled-components"; 
import Star from "../Components/Stars"
import { Link } from "react-router-dom"; 
import QuantityBtn from "../Components/QuantityBtn";
import {useCartContext} from "../Context/CartContext"
import { FaCheck } from "react-icons/fa6"; 
import Loading from "./Loading";

const SinglePageContent = ({singleProduct}) => {
    
    const {
        _id,
        specification,
        description,
        price,
        image,
        category,
        colors,
        size,
        freeshipping,
        inventory,
        averageRating,
        noOfRating,
        title,
      } = singleProduct;
    const {addToCart} = useCartContext(); 
    const [mainColor, setMainColor] = useState(colors?.[0]);
    const [amount, setAmount] = useState(1);
    const [itemSize, setitemSize] = useState(size?.[0]);
    const [images,setImages] = useState(image?.[0]);
  const increase = () => {
    setAmount((old) => {
      let temp = old + 1;
      if (temp > inventory) {
        temp = inventory;
      }
      return temp;
    });
  };
  const decrease = () => {
    setAmount((old) => {
      let temp = old - 1;
      if (temp < 1) {
        temp = 1;
      }
      return temp;
    });
  };

  

  return (
    <Wrapper>
      <div className="single-product-container">
        <div className="left-prdDetail">
          <div className="image-list">
            {
              image && image.map((item,index)=>{
                return <div className="small-img" key={index} onClick={()=>setImages(item)}>
                     <img src={item} alt="images"/>
                  </div>
              })
            }
          </div>
          <div className="maincontainer-img">
            <img src={images} alt="" />
          </div>
        </div>
        <div className="right-prdDetail">
          <div className="title-prd">
            <h3>{title}</h3>
          </div>
          <div className="rating-star">
            <div className="star">
               <Star star={averageRating}/>
            </div>
            <div className="rating">
              <h5>{noOfRating} Reviews</h5>
            </div>
          </div>
          <div className="price-prd">
            <h3 className="prc-through">₹{Number(price) - 100}</h3>
            <h3 className="act-prc">₹{price}</h3>
          </div>
          <div className="description-prd">
            <p>{description}</p>
          </div>
          <div className="choose">
            <div className="size-container">
            <label htmlFor="Size">Size</label>
              <select
                name="size"
                id="size"
                className="size"
                onChange={(e) => setitemSize(e.target.value)}
                value={itemSize ? itemSize : size?.[0]}
              >
                {size &&
                  size.map((item, index) => {
                    return (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    );
                  })}
              </select>
            </div>

            <div className="color-container">
                <label htmlFor="colors">Colors</label>
               <div className="color-section">
                {colors &&
                  colors.map((item, index) => {
                    return ( 
                      <button className="product-color" style={{backgroundColor:`${item}`}} onClick={()=>setMainColor(item)}>
                        {mainColor===item?<FaCheck/>:null}
                    </button>
                    );
                  })} 
                  </div>

            </div>
          </div>

          <QuantityBtn
            decrease={decrease}
            increase={increase}
            amount={amount}
          />

          <div className="addtocart-btn">
            <Link
              to="/cart"
              className="addtocart"
              onClick={() =>
                addToCart({ _id, amount, itemSize, mainColor, singleProduct })
              }
            >
              Add to Cart
            </Link>

            <Link to='/shop' className="bck-shopping">Back to shopping</Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SinglePageContent;
const Wrapper = styled.div`
.bck-shopping{
  color: #db6b97; 
  border: 1px solid #db6b97;
  padding: 5px 15px;
  border-radius: 10px;
  margin-left: 15px;
  text-decoration: none;
  font-weight: 500;
  box-sizing: border-box;
}
.small-img{
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
  cursor: pointer;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.product-color{
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white ;
  
}
.color-section{
  display: flex;
  align-items: center;
  gap: 10px;
}
  .left-prdDetail {
    display: flex;
    gap: 10px;
    align-items: center;
    /* width: 400px; */
    margin: auto 20px;
    margin-left: auto;
  }
  .maincontainer-img {
    width: 400px;
    height: 400px;
    margin: 30px 20px;  
  }
  .maincontainer-img img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
  .rating-star {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .star {
    display: flex;
    align-items: center;
  }
  .star,
  .rating {
    font-size: 20px;
    color: #727070;
    font-weight: 300;
  }
  .rating h5 {
    font-weight: 400;
  }
  .choose {
    display: flex;
    gap: 30px;
    margin: 10px 0px;
  }
  .size,
  #color {
    font-size: 16px;
    padding: 2px 12px 2px 3px;
    border: 1px solid gray;
    color: #7a7a7a;
    border-radius: 6px;
  }
  .addtocart {
    background-color: #212529;
    border-radius: 6px;
    padding: 5px 20px;
    font-size: 15px;
    color: white;
    font-weight: 400;
    text-decoration: none;
  }
  .single-product-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0px 50px;
  }

  .title-prd h3 {
    margin-top: 30px;
    font-size: 25px;
    font-weight: 500;
    text-transform: capitalize;
  }
  .price-prd {
    display: flex;
    gap: 10px;
    align-items: center;
    margin: 10px 0px;
  }
  .prc-through {
    text-decoration: line-through;
    font-size: 20px;
    font-weight: 300;
    color: #d48aa8;
  }
  .act-prc {
    font-weight: 500;
    font-size: 30px;
    color: #db6b97;
  }
  .description-prd {
    margin: 20px 0px;
    font-size: 15px;
    color: #7a7a7a;
  }
  .right-prdDetail {
    width: 400px;
    margin-left: 20px;
  }
  .addtocart-btn {
    margin-top: 30px;
  }
  .size-container,.color-container{
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .size-container label,.color-container label{
    font-size: 14px;
    font-weight: 500;
    color: #212529;

  }
 

  @media screen and (min-width:766px) and (max-width:991px){
    .single-product-container{
      grid-template-columns: 50% 50%;
    }
    .left-prdDetail{
      width: auto;

    }
    .maincontainer-img{
      width: 100%;
      height: 100%;
    }

  }

  @media screen and (max-width:767px){
    .single-product-container{
      display: block;
      padding: 0px 15px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .left-prdDetail{
      width: 100%; 
      flex-direction: column-reverse;
    }
    .small-img img{
      object-fit: cover;
    }
    .image-list{
      display: flex;
      max-width: 100%;
    }
    .maincontainer-img,.right-prdDetail{
      width: 100%;
      margin: 0px;
    }
    .maincontainer-img{ 
      width: 100%; 
      height: 250px;
      margin: auto;
    }
    .title-prd h3{
      margin-top: 10px;
      font-size: 18px;
    }
    .rating h5{
      font-size: 14px; 
      margin-bottom: 5px;
    }
    .rating-star{
      gap: 10px;
    }
    .prc-through{
      font-size: 15px;
    }
    .act-prc{
      font-size: 20px;
    }
    .price-prd{
      margin: 0px;
    }
    .description-prd{
      margin: 0px;
      font-size: 12px;
    }
      .size-container label,  .color-container label{
        font-size: 12px;
      }
       .size, #color{
        font-size: 12px;
       }
       .addtocart{
        font-size: 14px;
       }
       .addtocart-btn{
        margin-top: 20px;
       }
       .qtybtn{
        width: 100px;
       }
       
  }


`;

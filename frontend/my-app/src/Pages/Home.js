import React from 'react'
import styled from 'styled-components'
import Rightarrow from '../Images/rightarrow.svg'
import Explore from '../Images/Explore.svg'
import Footware from '../Images/Footware.svg'
import Demins from '../Images/Demins.svg'
import Sweater from '../Images/Sweater.svg'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return ( 
    <Wrapper>
      <div className="global-container">
        <div> 
      <div className="grid-container">

        <div className="explore">
          <NavLink to='/shop?category=All'>
        <div>
          <h5>Brands Everyone's Crushing on</h5>
          <div className="items-header">
            <h3>Explore All</h3>
            <img   src={Rightarrow} alt="" />
          </div>
        </div>
          <img className='widerimg' src={Explore} alt="" />
          </NavLink>
        </div>


        <div className="footware">
          <NavLink to='/shop?category=footware'>
        <div> 
          <h5>456 Items</h5>
          <div className="items-header">
            <h3>Footwear</h3>
            <img src={Rightarrow} alt="" />
          </div>
        </div>
          <img src={Footware} alt="" className='widerimg' />
          </NavLink>
        </div>

        <div className="sweater">
          <NavLink to='/shop?category=sweater'>

        <div>
          <h5>680 Items</h5>
          <div className="items-header">
            <h3>Sweater</h3>
            <img src={Rightarrow} alt=""  />
          </div>
        </div>
          <img src={Sweater} alt=""  className='widerimg'/>
          </NavLink>
        </div>

        <div className="demins">
          <NavLink to='/shop?category=demins'>
          <div> 
          <h5>341 Items</h5>
          <div className="items-header">
            <h3>Demins</h3>
            <img src={Rightarrow} alt="" />
          </div>
        </div>
          <img src={Demins} alt="" className='widerimg'/>
          </NavLink>
        </div>
      </div>


      </div>
      </div>
    </Wrapper>
  )
}

export default Home;

const Wrapper = styled.div`

.explore a ,.footware a ,.footware a,.sweater a ,.demins a{
   color: #2D2D2D;
}
  
  .items-header{ 
    display: flex;
    gap: 5px;
    align-items: center;
  } 
  .explore div:first-child,.footware div:first-child ,.footware div:first-child,.sweater div:first-child ,.demins div:first-child{
    position: absolute; 
    top: 30px; 
    margin-left: 10px;
  }
  .explore div:nth-child(2), .footware div:nth-child(2), .footware div:nth-child(2),   .sweater div:nth-child(2),  .demins div:nth-child(2){
    margin-left: 15px;
  }
  .grid-container>*{
    position: relative; 
  }
  .explore h5 ,.footware h5 ,.footware h5,.sweater h5 ,.demins h5{
    color: #DB6B97;
    font-size: 14px;
    margin: 10px 0px;
    margin-left :10px ;
  }
  .items-header h3{
    margin: 0px;
  }

  .explore{
    grid-area: explore; 
  }
  .footware{
    grid-area: footware;
  }
  .sweater{
    grid-area: sweater;
  }
  .demins{
    grid-area: demins;
  }
   
  .grid-container{
    display: grid;
    gap: 10px;
    grid-template-areas: "explore footware footware"
    "explore sweater demins"; 
    grid-auto-flow: column;
    margin-top: 50px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 

  }

  .explore .widerimg,.footware .widerimg ,.footware .widerimg,.sweater .widerimg,.demins .widerimg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

@media screen and (min-width:767px) and (max-width:991px) {
  .explore h5,   .footware h5,  .footware h5,  .sweater h5,   .demins h5 {
    font-size: 12px;
  }
  .explore .items-header,  .footware .items-header,.footware .items-header, .sweater .items-header,.demins .items-header{
    font-size: 13px;
  } 
  .explore div:nth-child(2), .footware div:nth-child(2), .footware div:nth-child(2),   .sweater div:nth-child(2),  .demins div:nth-child(2) {
      top: 25px;
   }
}

 

  @media screen and (max-width:767px) {
    .grid-container{  
      display:block; 
    }
    .grid-container > *{
      margin: 2px 0px;
    }
     
    .explore h5,  .footware h5, .footware h5, .sweater h5, .demins h5{
      font-size: 14px;
      margin: 5px 0px;
    }
    .items-header {
      margin-left: 10px;
    }
    .items-header h3 {
        font-size: 16px;
        top: 25px !important;
      }
      .items-header img{
       width: 25px;
     }
     .explore .category-abs,.footware .category-abs ,.footware .category-abs,.sweater .category-abs ,.demins .category-abs{
      top: 15px;
     }
     .grid-container {
      margin-top: 20px;
     }
    .explore div:first-child,.footware div:first-child ,.footware div:first-child,.sweater div:first-child ,.demins div:first-child{ 
    top: 10px;
  }
  }

  @media screen and (min-width:500px) and (max-width:767px) {
    .grid-container{
      display: grid;
    }
  .grid-container{
    grid-template-columns: none !important;
  } 
  .explore h5,   .footware h5,  .footware h5,  .sweater h5,   .demins h5 {
    font-size: 11px; 
    max-width: 130px;
    margin: 0px;
  }
  .items-header h3{
    font-size: 12px;
  } 
  .explore div:first-child,.footware div:first-child ,.footware div:first-child,.sweater div:first-child ,.demins div:first-child{ 
    top: 15px;
  }
}
   
`
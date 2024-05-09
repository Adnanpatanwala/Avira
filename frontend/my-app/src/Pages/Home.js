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
          <NavLink to='/shop?category=all'>
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
          <NavLink to='/about'>
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
        <div>
          <h5>680 Items</h5>
          <div className="items-header">
            <h3>Sweater</h3>
            <img src={Rightarrow} alt=""  />
          </div>
        </div>
          <img src={Sweater} alt=""  className='widerimg'/>
        </div>

        <div className="demins">
          <div> 
          <h5>341 Items</h5>
          <div className="items-header">
            <h3>Demins</h3>
            <img src={Rightarrow} alt="" />
          </div>
        </div>
          <img src={Demins} alt="" className='widerimg'/>
        </div>
      </div>


      </div>
      </div>
    </Wrapper>
  )
}

export default Home;

const Wrapper = styled.div`
  
  .items-header{ 
    display: flex;
    gap: 5px;
    align-items: center;
  } 
  .explore div,.footware div ,.footware div,.sweater div ,.demins div{
    position: absolute; 
    top: 30px; 
    margin-left: 10px;
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
   .explore div,   .footware div,  .footware div,   .sweater div,   .demins div {
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
  }
   
`
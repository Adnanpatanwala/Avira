 import React from 'react'
import styled from 'styled-components'
 
 const About = () => {
   return ( 
    <Wrapper>
        <div className="about-container">
        <div class="container">
  <div class="contentLeft">
    <div class="row">
        <div class="imgWrapper">
            <img src="https://images.unsplash.com/photo-1687579521048-217e24217d53?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcxNzl8&ixlib=rb-4.0.3&q=85" alt=""/>
        </div>
        <div class="imgWrapper">
            <img src="https://images.unsplash.com/photo-1686580546412-80e80519abd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcyMDN8&ixlib=rb-4.0.3&q=85" alt=""/>
        </div>
        <div class="imgWrapper">
            <img src="https://images.unsplash.com/photo-1688133338995-a394ce7314e4?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcyMDN8&ixlib=rb-4.0.3&q=85" alt=""/>
        </div>
        <div class="imgWrapper">
            <img src="https://images.unsplash.com/photo-1686354715732-7e4685269a25?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcyNzN8&ixlib=rb-4.0.3&q=85" alt=""/>
        </div>
    </div>
  </div>
  <div class="contentRight">
    <div class="content">
      <h4>Welcome To</h4>
      <h2>About Us Title...</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex ullam saepe, totam dicta fuga provident. Fuga, labore porro? Dolorem unde, explicabo atque voluptatum laborum harum, quas velit voluptates sit rerum non ullam laboriosam iusto ad sequi hic soluta consequatur quaerat!</p>
      <a href="#">Read More...</a>
    </div>
  </div>
</div>
</div>
    </Wrapper>
   )
 }
 
 export default About
 const Wrapper = styled.div` 
 
 .about-container{
    padding: 0px 50px;
    display: flex;
    justify-content: center;
 .container{
     width: 90%;
     height: 100%;
     max-width: 1170px;
     display: grid;
     grid-template-columns: repeat(2, 1fr);
     align-items: center;
     grid-gap: 60px;
     padding: 35px 0;
 }
 .contentLeft,
 .contentRight{
     width: 100%;
 }
 .contentLeft .row{
     width: 100%;
     display: grid;
     grid-template-columns: repeat(4, 1fr);
     grid-gap: 10px;
 }
 .contentLeft .row .imgWrapper{
     width: 100%;
     height: 450px;
     overflow: hidden;
     border-radius: 10px;
     cursor: pointer;
     box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.15);
 }
 .contentLeft .row .imgWrapper img{
     width: 100%;
     height: 100%;
     object-fit: cover;
     user-select: none;
     transition: 0.3s ease;
 }
 .contentLeft .row .imgWrapper:hover img{
     transform: scale(1.5);
 }
 .contentLeft .row .imgWrapper:nth-child(odd){
     transform: translateY(-20px);
 }
 .contentLeft .row .imgWrapper:nth-child(even){
     transform: translateY(20px);
 }
 .contentRight .content{
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     gap: 15px;
 }
 .contentRight .content h4{
     font-size: 22px;
     font-weight: 400;
     color: #DB6B97;
 }
 .contentRight .content h2{
     font-size: 40px;
     color: #1e272e;
 }
 .contentRight .content p{
     font-size: 16px;
     color: #343434;
     line-height: 28px;
     padding-bottom: 10px;
 }
 .contentRight .content a{
     display: inline-block;
     text-decoration: none;
     font-size: 14px;
     letter-spacing: 1px;
     padding: 8px 10px;
     color: #fff;
     background: #212529;
     border-radius: 8px;
     user-select: none;
 }
}
 @media(max-width: 768px){
     .about-container{
        padding: 0px 10px;
     .container{
         grid-template-columns: 1fr;
     }
     .contentLeft .row{
         grid-template-columns: repeat(2, 1fr);
     }
     .contentLeft .row .imgWrapper{
         height: 150px;
     }
     .contentRight .content h4{
         font-size: 18px;
     }
     .contentRight .content h2{
         font-size: 30px;
     }
     .contentRight .content p {
        font-size: 14px;
     }
     }
 }
 `
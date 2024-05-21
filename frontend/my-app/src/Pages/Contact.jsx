import React from 'react'
import styled from 'styled-components';
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";




const Contact = () => {
  return (
    <Wrapper>
        
<div className='contact-container'>
  
  <section>
    
    <div class="section-header">
      <div class="container">
        <h2>Contact Us</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </div>
    
    <div class="container">
      <div class="row">
        
        <div class="contact-info">
          <div class="contact-info-item">
            <div class="contact-info-icon">
            <FaLocationDot />
            </div>
            
            <div class="contact-info-content">
              <h4>Address</h4>
              <p>4671 Sugar Camp Road,<br/> Owatonna, Minnesota, <br/>55060</p>
            </div>
          </div>
          
          <div class="contact-info-item">
            <div class="contact-info-icon"> 
            <FaPhoneAlt />
            </div>
            
            <div class="contact-info-content">
              <h4>Phone</h4>
              <p>571-457-2321</p>
            </div>
          </div>
          
          <div class="contact-info-item">
            <div class="contact-info-icon">
            <TfiEmail />
            </div>
            
            <div class="contact-info-content">
              <h4>Email</h4>
             <p>ntamerrwael@mfano.ga</p>
            </div>
          </div>
        </div>
        
        <div class="contact-form">
          <form action="" id="contact-form">
            <h2>Send Message</h2>
            <div class="input-box">
              <input type="text" required="true" name=""/>
              <span>Full Name</span>
            </div>
            
            <div class="input-box">
              <input type="email" required="true" name=""/>
              <span>Email</span>
            </div>
            
            <div class="input-box">
              <textarea required="true" name=""></textarea>
              <span>Type your Message...</span>
            </div>
            
            <div class="input-box">
              <input type="submit" value="Send" name=""/>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  </section>
  
</div> 
    </Wrapper>
  )
}

export default Contact;

const Wrapper = styled.div`
 

.contact-container {
  min-height: 550px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(https://img.freepik.com/free-photo/vintage-pink-telephone-assortment_23-2148913962.jpg?t=st=1716296662~exp=1716300262~hmac=a8fa8038b7b3e050a6989e0ad0ad86cf6b43fcdd5221d1f7729390ad24c9b942&w=1060);
  background-size: cover;
  background-position: center;
  position: relative;
}

.contact-container::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,0.5);
}

section {
  position: relative;
  z-index: 3; 
  padding-bottom: 20px;
}

.container {  
    margin: 0px 120px;
}

.section-header {
  margin-bottom: 20px;
  text-align: center;
}

.section-header h2 {
  color: #FFF; 
  font-size: 30px;
  margin-bottom: 10px;
  font-weight: 400;

}

.section-header p {
  color: #FFF;
  font-size: 14px;
}

.row  {
  display: flex; 
  align-items: center;
  justify-content: space-between;
}

.contact-info {
  width: 50%;
}

.contact-info-item {
  display: flex;
  margin-bottom: 30px;
}

.contact-info-icon {
  height: 70px;
  width: 70px;
  background-color: #fff;
  text-align: center;
  border-radius: 50%;
}

.contact-info-icon:first-child {
  font-size: 30px; 
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-info-content {
  margin-left: 20px;
}

.contact-info-content h4 {
  color: #DB6B97;
  font-size: 18px;
  margin-bottom: 5px;
}

.contact-info-content p {
  color: #FFF;
  font-size: 14px;
}

.contact-form {
  background-color: #fff;
  padding: 40px;
  width: 45%;
  padding-bottom: 20px;
  padding-top: 20px;
}

.contact-form h2 {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
  color: #333;
}

.contact-form .input-box {
  position: relative;
  width: 100%;
  margin-top: 10px;
}

.contact-form .input-box input,
.contact-form .input-box textarea{
  width: 100%;
  padding: 5px 0;
  font-size: 16px;
  margin: 10px 0;
  border: none;
  border-bottom: 2px solid #333;
  outline: none;
  resize: none;
}

.contact-form .input-box span {
  position: absolute;
  left: 0;
  padding: 5px 0;
  font-size: 16px;
  margin: 10px 0;
  pointer-events: none;
  transition: 0.5s;
  color: #666;
}

.contact-form .input-box input:focus ~ span,
.contact-form .input-box textarea:focus ~ span{
  color: #e91e63;
  font-size: 12px;
  transform: translateY(-20px);
}

.contact-form .input-box input[type="submit"]
{
  width: 100%;
  background: #DB6B97;
  color: #FFF;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 18px;
  border: 1px solid #00bcd4;
  transition: 0.5s;
}

 

@media (max-width: 991px) {
  section {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  
  .row {
    flex-direction: column;
  }
  
  .contact-info {
    margin-bottom: 40px;
    width: 100%;
  }
  
  .contact-form {
    width: 100%;
  }
  .container {  
    margin: 0px 60px;
}
.contact-info-icon{
    width: 50px;
    height: 50px;
}
.contact-info-icon:first-child{
    font-size: 25px;
}
}
`

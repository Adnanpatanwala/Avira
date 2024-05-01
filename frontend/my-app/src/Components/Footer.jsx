import React from 'react'
import styled from 'styled-components'
import Logo from "../Images/Logo.svg"
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';





const Footer = () => {
  return ( 
    <Wrapper>
         
  <footer class="footer">
  	 <div class="footer-container">
        <div className="header-footer">
            <div className="logo">
                {/* <img src={Logo} alt="" /> */}
                <NavLink to='/' className='logo-inside'>Fatema's store</NavLink>
            </div>
            <div className="newsletter">
                <label className='newsletter-label' >Subscribe to Newsletter : </label>
                <input type="text" placeholder='Enter your email'/>
                <button>Subscribe</button>
            </div>
        </div>
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">shipping</a></li>
  	 				<li><a href="#">returns</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul>
  	 				<li><a href="#">watch</a></li>
  	 				<li><a href="#">bag</a></li>
  	 				<li><a href="#">shoes</a></li>
  	 				<li><a href="#">dress</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="#"><CiFacebook /></a>
  	 				<a href="#"><FaInstagram /></a>
  	 				<a href="#"><FaLinkedin /></a>
  	 				<a href="#"><FaXTwitter /></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.div`
     .footer{
         background-color: #DB6B97;
         padding: 70px 20px; 
         margin-top: 20px;
         border-top-right-radius: 10px;
         border-top-left-radius: 10px;
     }

     .header-footer{
        background-color: white;
        border-radius: 10px;
        display: flex;
        justify-content: space-between; 
        align-items: center;
        padding:20px;

        input{
            width: 300px;
            padding: 5px 10px; 
            border: 1px solid gray;
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
            outline: none;
            color: #2D2D2D;
        }
        button{
            background-color: #DB6B97;
            color: white;
            padding: 6px 10px;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
        }
        .newsletter-label{
        font-size: 13px;
        color: #DB6B97;
        text-transform: capitalize;
        margin-bottom:8px;
        font-weight: 500; 
        display: block;
        position: relative;
        }
        
        
     }
     
.footer-container{
	max-width: 1170px;
	margin:auto;

.row{
	display: flex;
	flex-wrap: wrap;
    margin-top: 25px;
}
ul{
	list-style: none;
}
.footer-col{
   width: 25%;
   padding: 0 15px;
   box-sizing: border-box;
}
.footer-col h4{
	font-size: 18px;
	color: #ffffff;
	text-transform: capitalize;
	margin-bottom: 35px;
	font-weight: 700;
	position: relative;
}
.footer-col h4::before{
	content: '';
	position: absolute;
	left:0;
	bottom: -10px;
	background-color: white;
	height: 2px;
	box-sizing: border-box;
	width: 50px;
}
.footer-col ul li:not(:last-child){
	margin-bottom: 10px;
}
.footer-col ul li a{
	font-size: 16px;
	text-transform: capitalize;
	text-decoration: none;
	font-weight: 300;
	color: #dddddd;
	display: block;
	transition: all 0.3s ease;
}
.footer-col ul li a:hover{
	color: #ffffff;
	padding-left: 8px;
    font-weight: 600;
}

.social-links{
    display: flex; 
}
 

.footer-col .social-links a{ 
    display: flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
	background-color: rgba(255,255,255,0.2);
	margin:0 10px 10px 0;
	text-align: center; 
	border-radius: 50%;
	color: #ffffff;
	transition: all 0.5s ease;
    font-size: 25px;
    padding: 10px;
     
}
.footer-col .social-links a:hover{
	color: #2D2D2D;
	background-color: #ffffff;
}
.logo-inside{ 
        text-decoration: none;
        color: #DB6B97; 
        font-size: 25px;
        font-weight: 500;   
        font-family: "Cedarville Cursive", cursive;
        font-style: normal;
        border: 1px solid #DB6B97;
        border-radius: 20px;
        padding: 2px 20px;
        outline: none;
    }
/*responsive*/
@media(max-width: 767px){
    .logo-inside{
        font-size: 18px;
    }
    .header-footer{
      flex-direction: column;
      label{
        margin-top: 10px;
        text-align: center;
      }
      .newsletter{ 
        text-align:center;
      }
      .newsletter input{
        width: 57%;
        box-sizing: border-box;
         
      }
    }
    .footer{
        padding: 20px 10px; 
    }
    
    .footer-col{
        flex-basis: 50%;
        margin-top: 15px;
    }
     .footer-col h4{
        margin-bottom: 20px;
        font-size: 14px;
    }
    .footer-col h4::before {
        bottom: -5px;
    } 
     .footer-col ul li a{
        font-size: 12px;
    }
    .footer-col .social-links a {
        font-size: 18px;
        padding: 8px; 
    }
    .footer-col .social-links{
        flex-wrap: wrap;
    }
}
 


}

 


`
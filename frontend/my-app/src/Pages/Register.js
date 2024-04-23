import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import LoginOrRegister from '../Components/LoginOrRegister'
import OtpPop from '../Components/OtpPop';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'
import { FaArrowRight } from "react-icons/fa";
import {useAuthContext} from "../Context/AuthContext"
 
 const Register = () => {

  const {register} = useAuthContext();

  const [firstname,setFirstName] = useState('');
  const [lastname,setLastname] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const [email,setEmail] = useState('');
  const [phoneno, setphone] = useState('');

  const popup = useRef();
  
  // const [openOTP,SetOtp] = useState(false);
  
  const handlesubmitRegister = async(e) =>{
    e.preventDefault();
    const  response = await register({firstname,lastname,password,confirmPassword,email,phoneno});
    document.getElementsByClassName('error-msg')[0].innerHTML = response?.data || response?.response?.data.error.msg || response?.message;
    if(response.status===201){
       document.getElementsByClassName("otpcontainer")[0].style.display = "block";
    }
    
  }
 
 
 
 
  return ( 
    <Wrapper className='page'>
      <div className="login-container">
        <LoginOrRegister/>
        <div className="right-container-login">
                    
                <form className="register-center-container" onSubmit={handlesubmitRegister                                                    }>
                    <h4>Register </h4>
                    {/* name */}
                    <div className="name">
                    <input type="text" placeholder='First Name' className='firstname' value={firstname} onChange={(e)=>setFirstName(e.target.value)}/>
                    <input type="text" placeholder='Last Name' className='lastname' value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
                    </div>
                    {/* phone no  */}
                    <div className="phone-no">
                    <span><PhoneInput placeholder="Enter Phone number" value={phoneno} onChange={setphone} flags={flags} defaultCountry='IN' className='phono'/></span> 
                    </div>
                    <div className="email">
                    <input type="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="password">
                    <input type="text" placeholder='password'  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div className="confirm-password">
                    <input type="text" placeholder='confirm password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                    </div>


                    <button className="next" type='submit'>Verify</button>
                  <div className="error-msg"></div>  
                </form>
            </div>
            
            <div className="otpcontainer" ref={popup}>
               <OtpPop phoneno={phoneno} popup={popup}/> 
            </div>
            
      </div>

    </Wrapper>
  )
}
export default Register

const Wrapper = styled.div`
  .otpcontainer{
    display: none;
  }
.login-container{
    display: grid;
    grid-template-columns: 60% 40%;
    height: 100%;
    position: fixed;
top: 0%;
left: 0%;
width: 100%;
height: 100%;
background: white;
z-index: 1;
}
.right-container-login{
    display: flex;
    align-items: center;
} 
.firstname,.lastname,.phono input,.confirm-password input,.password input,.email input{
    width: 100%;
    box-sizing: border-box;
    margin-top: 20px;
    padding: 6px 20px;
    background-color: #F6F6F6;
    border: 0.1px solid #D2D2D2;
    border-radius: 8px;
    outline: none;
    letter-spacing: normal !important;
}

.phono div div{
  box-shadow: none;
  background-color: white;
  outline: none;
}
.PhoneInputCountry{
  margin-right: 15px;
}

.register-center-container h4{
    font-size: 18px;
    font-weight: 500;
}
.signin,.submitotp{
    width: 100%;
    padding: 6px 0px;
    background-color: #2D2D2D;
    color: white;
    font-weight: 500;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 15px;
}
 
 
.register{
font-size: 14px;
    color: #DB6B97;
    text-decoration: none;
}
.register-container{
    display: flex;
    justify-content: center;
    margin-top:20px;
    gap: 15px;
    font-weight: 500;
}
 
 
.register-center-container{
    width: 360px; 
    margin: auto;
    display: block; 
} 
.phone-no{
  display: flex;
  align-items: center; 
  gap: 10px;
  position: relative;
  margin-top: 15px;
  input{ 
    margin: auto;
     letter-spacing: 5px;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
}
.otp-verify{
  position: absolute;
  font-size: 14px;
  bottom: 0px;
  right: 0px;
  font-weight: 500;
  color: white;
  background-color: #2D2D2D;
  padding: 6px 10px;
  border-radius: 8px;
}

.next{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 500; 
  background-color: #2D2D2D;
  color: white;
  border-radius: 10px;
  padding: 2px 8px;
 width: 100%;
 margin-top: 20px;
}

.error-msg{
  color: #ff3434; 
  font-size: 14px; 
  margin-top: 10px;
  text-align: center;
}
 
`

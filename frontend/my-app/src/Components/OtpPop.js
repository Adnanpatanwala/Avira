import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useState ,useRef} from 'react';
import {useNavigate} from "react-router-dom";
import { useAuthContext } from '../Context/AuthContext';

const OtpPop = ({phoneno,popup}) => {
  const {verifyOTP} = useAuthContext(); 
const [errormsg,setErrormsg] = useState("");
  // input otp 
  const [otp,setOtp] = useState(new Array(6).fill(""));
  const inputref = useRef([]);  

  const navigate = useNavigate();

  
  const sumitOtp = async(e) =>{ 
    e.preventDefault();
    const newotp = otp.join("");
    if(newotp.length!==6){
      setErrormsg("Enter 6 digit OTP");
      return;
    } 
    const res = await verifyOTP({finalInput:newotp,phoneno});
    if(res?.data?.status==="approved" && res?.status===200){
      setErrormsg("OTP verified");
      setTimeout(() => {
        if(popup.current){
        popup.current.style.display = "none";
        navigate('/login');
      }
    }, 3000); 
      return;
    }
  } 

 
  const handlebackspace =(index,e)=>{
    if(e.key==="Backspace" && !otp[index] && inputref.current[index-1]){
      inputref.current[index-1].focus();
    }
  }
   

const handleChange = (index,e)=>{

  const value = e.target.value;

  const newOtp = [...otp];

  newOtp[index] = value.substring(value.length-1);
  setOtp(newOtp); 
  
  if(value && index<5 && inputref.current[index+1]){ 
    inputref.current[index+1].focus();
  }
 

  

}


  return ( 
    <Wrapper>  
        <div className="otp">
          <form onSubmit={sumitOtp}>

          <div className="otp-inside-container">
                      <label htmlFor="otp">Enter the OTP : </label>
                      <div className="otpinputs"> 
                      {
                        otp.map((item,index)=>{

                          return<input 
                          className='optinput'
                          type="number" 
                          key={index}
                          name="" 
                          id="" 
                          value={item}  
                          onChange={(e)=>handleChange(index,e)}
                          ref={(input)=>inputref.current[index] = input}
                          onKeyDown={(e)=>handlebackspace(index,e)}
                          
                          />
                        })
                      }
                      </div>
                        </div>
                      <button className='submitotp' type='submit'>Submit otp</button>
                      </form>
                      <div className='otp-container-err'>{errormsg}</div>
                    </div>
                    <div className="backdrop"></div>
    </Wrapper>
  )
}

export default OtpPop; 
const Wrapper = styled.div`
 position: fixed;
 top: 0px;
 left: 0px;
 width: 100vw;
 height: 100vh;
 background-color: rgb(0,0,0,0.7);

 .otp{

   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%,-50%);
   background-color: white;
   padding: 30px;
   border-radius: 10px;  
   .submitotp{
    margin: 0px;
   }
  }


 .otpinputs{
  display: flex; 
  margin-top: 15px;
  align-items: center;
  gap: 15px;
  transition: 0.5s;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
   -webkit-appearance: none;
   margin: 0;
  }
}
  
 .otpinputs input{
  width: 40px;
  height: 35px;
  padding: 0px;
  text-align: center;
  font-size: 16px; 
  margin: auto;
  border: 1px solid #2D2D2D;
  border-radius: 10px;
  outline: none;
  
 }
 .otp-inside-container{
  margin: 25px 0px;  
  gap: 15px;
  /* width: 300px; */
  label{ 
    margin: auto 0px;
    display: block;
    text-align: center;
  }
 }

 .otp-container-err{
  color: red;
  text-align: center;
  margin-top: 20px;
 }
`
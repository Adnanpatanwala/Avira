import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useState ,useRef} from 'react';
import { useAuthContext } from '../Context/AuthContext';

const OtpPop = ({phoneno}) => {
  const {verifyOTP} = useAuthContext();
  const [finalInput, setFinalInput] = useState('');
  const inputCount = useRef(0);

  const update =(e,ans)=>{
    e.disabled = ans;
    if(ans){
      // e.blur();
    }else{  
      e.focus();
    }
  }
  // Function to handle input change
  // const handleChange = (e) => {
  //    e.target.value = e.target.value.replace(/[^0-9]/g,"");
  //     let {value} = e.target;
  //     if(value.length==1){
  //       update(e.target,true);
  //       if(inputCount.current<= 3 && e.key!="Backspace"){
  //         setFinalInput((old)=>old+value);  
  //       if(inputCount.current<3){
  //         update(e.target.nextElementSibling,false);
  //       } 
  //     } 
  //     inputCount.current+=1;


  //     } 
  //     else if(value.length==0 && e.key==='Backspace'){
  //       setFinalInput((old)=>old.substring(0,old.length-1));
  //       if(inputCount.current==0){
  //         update(e.target,false)
  //         return false;
  //       }
  //       update(e.target, true); 
  //       update(e.target.previousElementSibling, false);
 

  //       inputCount.current-=1;
  //     }
 

      
  //   };
 
  // Function to handle submission

  const sumitOtp = async() =>{
    console.log("helllo");
    await verifyOTP({finalInput,phoneno});
  }
   
  return ( 
    <Wrapper>  
        <div className="otp">
          <div className="otp-inside-container">
                      <label htmlFor="otp">Enter the OTP : </label>
                      <div className="otpinputs"> 
                      <input type="number" name="" id="" value={finalInput}  onChange={(e)=>setFinalInput(e.target.value)}/>
                      </div>
                        </div>
                      <button className='submitotp' onClick={()=>sumitOtp()}>Submit otp</button>
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
  }


 .otpinputs{
  display: flex; 
  /* margin: 15px 0px; */
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
  width: 35px;
  height: 35px;
  padding: 0px;
  text-align: center;
  font-size: 16px;
  margin: 0px;
 }
 .otp-inside-container{
  display: flex;
  margin: 25px 0px;  
  gap: 15px;
  label{ 
    margin: auto 0px;
  }
 }
`
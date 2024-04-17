import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useState ,useRef} from 'react';

const OtpPop = () => {
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
  const handleChange = (e) => {
     e.target.value = e.target.value.replace(/[^0-9]/g,"");
      let {value} = e.target;
      if(value.length==1){
        update(e.target,true);
        if(inputCount.current<= 3 && e.key!="Backspace"){
          setFinalInput((old)=>old+value);  
        if(inputCount.current<3){
          update(e.target.nextElementSibling,false);
        } 
      } 
      inputCount.current+=1;


      } 
      else if(value.length==0 && e.key==='Backspace'){
        setFinalInput((old)=>old.substring(0,old.length-1));
        if(inputCount.current==0){
          update(e.target,false)
          return false;
        }
        update(e.target, true); 
        update(e.target.previousElementSibling, false);
 

        inputCount.current-=1;
      }
 

      
    };
 
  // Function to handle submission
   
  return ( 
    <Wrapper>  
        <div className="otp">
          <div className="otp-inside-container">
                      <label htmlFor="otp">Enter the OTP : </label>
                      <div className="otpinputs">
                        <input type='text' inputMode='numeric' autoComplete='one-time-code' pattern='\d{1}' maxLength={1} disabled={false}
                        onKeyUp={handleChange}/>
                        <input type='text' inputMode='numeric' autoComplete='one-time-code' pattern='\d{1}' maxLength={1} disabled={true}
                        onKeyUp={handleChange}/>
                        <input type='text' inputMode='numeric' autoComplete='one-time-code' pattern='\d{1}' maxLength={1} disabled={true}
                        onKeyUp={handleChange}/>
                        <input type='text' inputMode='numeric' autoComplete='one-time-code' pattern='\d{1}' maxLength={1} disabled={true}
                        onKeyUp={handleChange} />
                      </div>
                        </div>
                      <button className='submitotp'>Submit otp</button>
                    </div>
    </Wrapper>
  )
}

export default OtpPop; 
const Wrapper = styled.div`
.otp{
  /* display: none; */
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
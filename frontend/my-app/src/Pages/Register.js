import React from 'react'
import styled from 'styled-components'
import LoginOrRegister from '../Components/LoginOrRegister'
import OtpPop from '../Components/OtpPop';
 
 const Register = () => {
  
  
  return ( 
    <Wrapper>
      <div className="login-container">
        <LoginOrRegister/>
        <div className="right-container-login">
                    
                <form className="register-center-container">
                    <h4>Register </h4>
                    {/* name */}
                    <div className="name">
                    <input type="text" placeholder='First Name' className='firstname'/>
                    <input type="text" placeholder='Last Name' className='lastname'/>
                    </div>
                    {/* phone no  */}
                    <div className="phone-no">
                    <span>+91</span>
                    <input type="tel" placeholder='Enter Number' maxLength="10" className='phono' />
                    <button className='otp-verify'>verify</button>
                    </div>
                    <OtpPop/>
                    {/* email-----     */}
                    <input type="email" placeholder='Enter Email' className='email'/>
                     
                     
                    <button className='signin'>Sign up</button>
                     
                </form>
            </div>
      </div>

    </Wrapper>
  )
}
export default Register

const Wrapper = styled.div`
 
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
 .email,.firstname,.lastname,.phono{
    width: 100%;
    box-sizing: border-box;
    margin-top: 20px;
    padding: 6px 20px;
    background-color: #F6F6F6;
    border: 0.1px solid #D2D2D2;
    border-radius: 8px;
    outline: none;

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

 
`

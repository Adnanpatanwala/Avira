import React, { useState } from 'react'
import styled from 'styled-components';
import LoginOrRegister from '../Components/LoginOrRegister'
import { NavLink } from 'react-router-dom'
import { FaRegEye } from "react-icons/fa6";
import ToggleBtn from '../Components/ToggleBtn';
import { FaRegEyeSlash } from "react-icons/fa6"; 
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
const Login = () => { 

    const [view,setView] = useState({open:false,type:'password'});
    const [check,setCheck] = useState(true)
    const navigate = useNavigate(); 
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
 
    const onSignIn = async(e)=>{
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/v1/login',{email:email,password:password});
            if(response.status===200){
                if(check){}
                setEmail('');
                setPassword('');
                navigate(-1);
            } 
        } catch (error) {
            console.log(error);
        }
    }
     
    const onPasswordToggel = ()=>{ 
        setView({...view,open:!view.open,type:view.type === 'password' ? 'text' : 'password'}); 
    }

    const handleChange=()=>{
        setCheck(old=>!old);
    }

  return ( 
    <Wrapper> 
        <div className="login-container">
            <LoginOrRegister/>
            <div className="right-container-login">
                <form className="login-center-container" onSubmit={onSignIn}>
                    <h4>Nice to see you again!</h4>
                    {/* email-----     */}
                    <input type="email"
                    placeholder='Enter Email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    {/* password ------ */}
                    <div className="password-input">
                    <input type={view.type}  placeholder='Enter password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    
                    />
                    <button className='eye-btn' onMouseDown={onPasswordToggel}>{view.open?<FaRegEye />:<FaRegEyeSlash />}</button>
                    </div>
                    
                    <div className="forgot-container">
                        <span className='togglebtn'>
                            <ToggleBtn check={check} handleChange={handleChange}/>
                            <h5>Remember me</h5>
                        </span>
                        <NavLink className='forgotpassword'>forgot password?</NavLink>
                    </div>
                    <button className='signin' type='submit' >Sign in</button>
                    <div className='register-container'>
                    <h5>Don't have an account?</h5>
                    <NavLink className="register" to='/register'>Get Started</NavLink>
                    </div>
                </form>
            </div>
        </div>
    </Wrapper>
  )
}

export default Login;
const Wrapper = styled.div`
position: fixed;
top: 0%;
left: 0%;
width: 100%;
height: 100%;
background: white;
z-index: 1;

.login-container{
    display: grid;
    grid-template-columns: 60% 40%;
    height: 100%;
}
 
.login-center-container{
    width: 360px; 
    margin: auto;
    display: block; 
} 
.right-container-login{
    display: flex;
    align-items: center;
}
.login-center-container input{
    width: 88%;
    margin-top: 20px;
    padding: 6px 20px;
    background-color: #F6F6F6;
    border: 0.1px solid #D2D2D2;
    border-radius: 8px;
}
.login-center-container h4{
    font-size: 18px;
    font-weight: 500;
}
.signin{
    width: 100%;
    padding: 6px 0px;
    background-color: #2D2D2D;
    color: white;
    font-weight: 500;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}
.forgot-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0px;
}
.forgotpassword{
    font-size: 12px;
    text-decoration: none;
    color: gray;
    font-weight: 500;
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
.togglebtn{
    display: flex;
    align-items: center;
    gap: 10px;
    h5{
        font-size: 12px;
        color: gray;
        font-weight: 300;
    }
} 
.password-input{
    position: relative;
}
.eye-btn{
    border: none;
    background:none;
    font-size: 20px;
    position: absolute;
    right: 10px;
    bottom: 0px; 
    cursor: pointer;
}
`
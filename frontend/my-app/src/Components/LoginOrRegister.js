import React from 'react'
import styled from 'styled-components'
import Logo from '../Images/Logo2.svg';
import Illus from '../Images/Illustration.svg';
const LoginOrRegister = () => {
  return (
    <Wrapper>  
        <div className="left-container-login">
            <img src={Logo} alt="" />
            <div className="bottom-img">
                <img src={Illus} alt="" />
            </div>
        </div>
    
</Wrapper>
  )
}

export default LoginOrRegister
const Wrapper = styled.div`
 
.left-container-login img{
    margin-left: 20px;
    margin-top: 50px;
}
.left-container-login{
    background-color: #DB6B97;
    position: relative;
    width: 100%;
height: 100%;
}
.bottom-img{
    position: absolute;
    bottom: 0px;
    right: -50px;
}
.bottom-img img{
    width: 700px;
}

`
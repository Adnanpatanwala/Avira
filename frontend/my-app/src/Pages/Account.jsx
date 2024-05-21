import React from 'react'
import styled from 'styled-components';
import { PiUserCircleLight } from "react-icons/pi";


const Account = () => {
  return (
    <Wrapper>
        <div className="global-container">
            <div className="account">
               <div className="account-header"> 
               <div className='account-img'>
                <PiUserCircleLight/>
               </div>
               <h4>Adnan Patanwala</h4>
               </div>
               <div className="account-info">
                <form action="">
                <div className="profile-container">
                  <label htmlFor="firstname">Firstname : </label>
                  <input type="text" name='firstname' />
                </div>
                <div className="profile-container">
                  <label htmlFor="lastname">Lastname : </label>
                  <input type="text" name='lastname' />
                </div>
                <div className="profile-container">
                  <label htmlFor="Email">Email : </label>
                  <input type="text" name='Email' />
                </div>
                <button className='account-btn'>update</button>
                </form>
               </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default Account;

const Wrapper = styled.div`
    margin: 20px 0px; 
    .account {
      border: 2px solid #2D2D2D;
      padding: 10px 30px;
      border-radius: 20px;
      width: fit-content;
      margin: auto;
      background-color: white;
    }
    .account-header h4{
      font-size: 20px;
      font-weight: 400;
      text-align: center;
    }
    .account-img{
      text-align: center;
    }
    .account-img>*{
      font-size: 60px;  
      
    } 
    .profile-container{
      label{
        display: block;
        font-size: 12px;
        font-weight: 300;
      }
    }
    .account-btn{
      background-color: #2D2D2D;
      padding: 5px 10px;
      border-radius:10px;
      margin: 10px 0px;
      text-transform: capitalize;
      color: white;
    }
    
`

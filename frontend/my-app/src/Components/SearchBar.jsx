import React from 'react'
import styled from 'styled-components';
import { IoIosCloseCircle } from "react-icons/io";


const SearchBar = ({setOpenSearchbar,searchinput}) => {
    return (
        <Wrapper>
            <div class="topnav">
                <div class="search-container">
                    <form action="/action_page.php">
                        <input type="text" placeholder="Search.." name="search" className='search-bar' ref={searchinput} />
                        <button type="submit" className='submit-btn'>submit</button>
                    </form>
                    <button onClick={()=>setOpenSearchbar(false)} className='close-btn'><IoIosCloseCircle /></button>
                </div>
            </div>

        </Wrapper>
    )
}

export default SearchBar;

const Wrapper = styled.div`
 
.topnav .search-container {
  position: absolute;
  top: 0%;
  left: 50%;
  height: 70px; 
  background-color: #DB6B97; 
  transform: translateX(-50%); 
  padding: 10px 5px; 
  box-sizing: border-box; 
  display: flex;
  align-items: center;
  outline: none;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  animation: SearchBar 0.5s ease-in-out;
}
@keyframes SearchBar {
    0%{
        top: -70px;
    }
    100%{
        top: 0px;
    }
}
.search-container::before{
    content: "";
    position: absolute;
    top: 0px;
    right: -68px;
    width:0px;
    height: 0%;
    border-left: 70px solid #DB6B97;
	border-bottom: 70px solid transparent;  
    outline:none ; 
}
.search-container::after{
    content: ""; 
    position: absolute;
    top: 0px;
    left: -68px;
    width:0px;
    height: 0%;
    border-right: 70px solid #DB6B97;
	border-bottom: 70px solid transparent; 
    outline: none;
}
.topnav .search-container form{
    display: flex;
    align-items: center;
}

.topnav input[type=text] {
  padding: 5px 10px; 
  font-size: 12px;
  border: none; 
  /* outline: none; */
  color: #2D2D2D;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  width: 300px;
}

.topnav .search-container .submit-btn {
  padding: 4px 10px; 
  margin-right: 16px;
  background: #2D2D2D;
  color: white;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 14px; 
  box-sizing: border-box;
  cursor: pointer;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

.close-btn{
    background-color:  white !important;
    color: #a90707 !important;
    font-size: 20px !important;
    border-radius: 50%;
}
 

`

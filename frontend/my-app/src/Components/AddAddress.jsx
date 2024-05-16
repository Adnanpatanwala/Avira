import React from 'react'
import styled from 'styled-components'
import { IoIosCloseCircleOutline } from "react-icons/io";

const AddAddress = ({setAddress}) => {
  return (
    <Wrapper > 
        <div className="address-container ">
            <div className="close-btn">
                <button onClick={()=>setAddress(false)}><IoIosCloseCircleOutline/></button>
            </div>
            <div className="name">
                <div className="cont-add">
                <label htmlFor="">first name</label>
                <input type="text" placeholder='first name' maxLength={50}/>
                </div>
                <div className="cont-add">
                <label htmlFor="">Last name</label>
                <input type="text" placeholder='last name' maxLength={50}/>
                </div>
            </div>
            <div className="address">
                <div className="cont-add">
                <label htmlFor="">Address Line 1</label>
                <input type="text" placeholder='Address Line 1' maxLength={150}/>
                </div>
                <div className="cont-add">
                <label htmlFor="">Address Line 2</label>
                <input type="text" placeholder='Address Line 2'maxLength={100}/>
                </div>
            </div>
            <div className="name">
                <div className="cont-add">
                <label htmlFor="">State</label>
                <input type="text" placeholder='state'/>
                </div>
                <div className="cont-add">
                <label htmlFor="">Pincode</label>
                <input type="text" placeholder='pincode' />
                </div>
            </div>
            <div className="name">
            <div className="cont-add">
                <label htmlFor="">City</label>
                <input type="text" placeholder='city' />
                </div>
                <div className="cont-add">
                <label htmlFor="">Country</label>
                <input type="text" placeholder='country'/>
                </div>
            </div>

            <div className="add-btn-address">
            <button className='addaddressbtn'>Add</button>
            </div>
        </div>

    </Wrapper>
  )
}

export default AddAddress

const Wrapper = styled.div`
position: absolute;
top: 0%;
left: 0%; 
width: 100%;
height: 100%;
background-color: rgb(0,0,0,0.3); 
.close-btn{
    button{
        display: flex;
        float: right;
        font-size: 20px;
    }
}
.add-btn-address{
    margin-top: 15px;
    button{
        font-size: 14px; 
    }
}
.address-container{
    width: 500px;
    box-shadow: 0px 0px 3px gray;
    padding: 20px;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: white;
    
} 

.name{
    display: flex;
    gap: 20px;
}
.cont-add label{
    display: block;
    font-size: 10px;
    text-transform: capitalize;
    font-weight: 500;
    margin-top: 15px;
}
.cont-add input{
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 2px 5px;
    font-size: 12px;

}
.address{
    input{
        width: 100%;
        box-sizing: border-box;
    }
}
`
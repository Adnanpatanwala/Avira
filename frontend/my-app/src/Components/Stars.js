import React from 'react'
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io"; 

const Stars = ({star}) => {
    const tempstars =Array.from({length:5},(_,index)=>{
        const temp = index+0.5;
        return(
            <span key={index}>
                {
                    star>=temp+1?<IoIosStar/>:
                    star>=temp?<IoIosStarHalf/>:<IoIosStarOutline/>
                }
            </span>
        )
    })
  return (
    <div>{tempstars}</div>
  )
}

export default Stars
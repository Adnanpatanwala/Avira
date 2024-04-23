import React, { createContext, useContext,useState } from 'react'
import axios from 'axios' 
 
const AuthenticationContext = createContext();

  const AuthContext = ({children}) => {


     const register = async(data)=>{
      try {
         
         const res =  await axios.post("http://localhost:5000/api/v1/register",{...data},{ 
          headers: {
          'Content-Type': 'application/json',
        }});   
        return res
      } catch (error) { 
        return error
      }
     }

     const verifyOTP = async(data)=>{
      try { 
        const res = await axios.post("http://localhost:5000/api/v1/verify/recieveotp",{otp:data.finalInput,phoneno:data.phoneno},{
          headers: {
            'Content-Type': 'application/json',
          }
        }) 
        console.log(res);
        return res;
      } catch (error) {
        console.log(error);
        return error
      }
     }



  return ( 
    <AuthenticationContext.Provider value={{
      register,
      verifyOTP
    }}>
        {children}
    </AuthenticationContext.Provider>
  )
}

export default AuthContext;

export const useAuthContext = () =>{
    return useContext(AuthenticationContext)
}
import React, { createContext, useContext,useState } from 'react'
import axios from 'axios' 
import { useCookies } from 'react-cookie';
 
const AuthenticationContext = createContext();

  const AuthContext = ({children}) => {

    const [cookies, setCookie, removeCookie] = useCookies();
 
     const register = async(data)=>{
      try {
         
         const res =  await axios.post(`${process.env.REACT_APP_DOMAINURL}/api/v1/register`,{...data},{ 
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
        const res = await axios.post(`${process.env.REACT_APP_DOMAINURL}/api/v1/verify/recieveotp`,{otp:data.finalInput,phoneno:data.phoneno},{
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


     const logout = async()=>{
      try {
        const data = await axios.delete(`${process.env.REACT_APP_DOMAINURL}/api/v1/logout`,{
          headers: {
            'Content-Type': 'application/json',
          }, 
          withCredentials:true,
        }); 
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
     }




  return ( 
    <AuthenticationContext.Provider value={{
      register,
      verifyOTP,
      cookies,
      setCookie,
      removeCookie,
      logout,
 
    }}>
        {children}
    </AuthenticationContext.Provider>
  )
}

export default AuthContext;

export const useAuthContext = () =>{
    return useContext(AuthenticationContext)
}
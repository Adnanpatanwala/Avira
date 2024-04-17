import React, { createContext, useContext,useState } from 'react'
import axios from 'axios' 
 
const AuthenticationContext = createContext();

export const AuthContext = ({children}) => {
     

  return ( 
    <AuthenticationContext.Provider value={{
         
    }}>
        {children}
    </AuthenticationContext.Provider>
  )
}
 

export const useAuthContext = () =>{
    return useContext(AuthenticationContext)
}
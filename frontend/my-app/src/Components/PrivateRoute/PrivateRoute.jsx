import React from 'react'
import { Route } from 'react-router-dom'

const PrivateRoute = ({Component,path,Unauthneticate}) => {
    
console.log(Component,path,Unauthneticate);

if(Unauthneticate){
    return  <Route to='login'/>
}

  return ( 
        <Route 
        path={path}
        element={<Component/>}
        />
    
  )
}

export default PrivateRoute

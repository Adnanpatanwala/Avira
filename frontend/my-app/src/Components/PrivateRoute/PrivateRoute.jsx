import React from 'react'
import { Navigate } from 'react-router-dom';



const PrivateRoute = ({element,isauthneticate}) => {
  

  return ( 
     isauthneticate ? element: <Navigate to='/login' replace />
  )
}
 

export default PrivateRoute

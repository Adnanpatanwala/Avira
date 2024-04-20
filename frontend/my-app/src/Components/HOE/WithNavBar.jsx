import React from 'react'
import NavBar from '../NavBar'

const WithNavBar = ({Component}) => {
  return ( 
    <>
    <NavBar/>
    <Component/>
    </>
  )
}

export default WithNavBar

import React from 'react'
import NavBar from '../NavBar'
import BottomNavBar from '../BottomNavBar'

const WithNavBar = ({Component}) => {
  return ( 
    <>
    <NavBar/>
    <Component/>
    <BottomNavBar/>
    </>
  )
}

export default WithNavBar

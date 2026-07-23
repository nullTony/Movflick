import { Outlet } from 'react-router-dom'
import React from 'react'
import TabBar from './tabBar'

const Layout = () => {
  return (
    <>
        <Outlet /> 
        <TabBar />
    </>
  )
}

export default Layout
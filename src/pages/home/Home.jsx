import React from 'react'
import { Outlet } from 'react-router-dom'
import Categories from '../../components/categories/Categories'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
  return (
    <>
        <Categories/>
        <Outlet />
    </>
  )
}

export default Home
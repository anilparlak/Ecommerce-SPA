import React from 'react'
import { Outlet } from 'react-router-dom'
import Categories from '../../components/categories/Categories'

const Home = () => {
  return (
    <>
        <Categories/>
        <Outlet />
    </>
  )
}

export default Home
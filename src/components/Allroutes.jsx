import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Login from '../pages/Login'
import UserPost from '../pages/posts'
import Register from '../pages/register'
import Navbar from './navbar'

function Allroutes() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/posts" element={<UserPost />} />
      </Routes>
    </>
  )
}

export default Allroutes
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Login from '../pages/Login'
import Register from '../pages/register'

function Allroutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default Allroutes
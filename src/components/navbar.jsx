import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header>
        <div className="links">
            <Link to="/login">Login</Link>
            <Link >Katill_boyy <img src="" alt="" /></Link>
            <Link to="/posts">Posts</Link>
            <Link to="/profile">Profile</Link>
        </div>
    </header>
  )
}

export default Navbar
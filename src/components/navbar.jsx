import React, { useContext } from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AppContext'

function Navbar() {
  const {isAuth, user, Logout} = useContext(AuthContext)

  return (
    <header>
        <div className="links">
            {isAuth ? <Link onClick={Logout}>Logout</Link> : <Link to="/login">Login</Link>}
            <Link to="/posts">Posts</Link>
            {isAuth ? <Link to="/profile">{user.name+ " " +user.last_name} <img style={{position: "absolute", margin: "0 10px", borderRadius: "50%", objectFit: "cover"}} height="30px" width="30px" src={user.avatar} alt="" /></Link> : ""}
        </div>
    </header>
  )
}

export default Navbar
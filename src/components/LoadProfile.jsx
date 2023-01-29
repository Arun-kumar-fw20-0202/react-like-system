import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AppContext'
import "../styles/loadprofile.css"

function LoadProfile({user,total_post}) {
   
  return (
    <>
        <div className="top">
            <img src={user.avatar} alt="" />
            <div className="data">
                <h1>{user.name + " " + user.last_name}</h1>
                <h4>Total post : {total_post}</h4>
            </div>
        </div>

    </>
  )
}

export default LoadProfile
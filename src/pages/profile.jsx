import React, { useContext, useEffect, useState } from 'react'
import LoadProfile from '../components/LoadProfile'
import { LoaduserPost } from '../components/LoaduserPost'
import { AuthContext } from '../context/AppContext'

export const Profile = () => {
    const {user, isAuth} = useContext(AuthContext)
    const [posts, setPosts] = useState([])
    let count = 0

    posts.map((ele) => {
        user.id == ele.userId ? count++ : ""
    })
    console.log(count)
    
    const getCount = async () => {
        const res = await fetch(`http://localhost:8080/posts`);
        const json = await res.json()
        setPosts(json)
    }


    useEffect(() => {
        getCount();
    },[])


  return (
    <>
        <LoadProfile user={user} total_post={count} />
        
        <div className="userPost">
            {posts.map((ele,i) => (
                user.id == ele.userId ? <LoaduserPost key={i} img={ele.image_url} /> : ""
            ))}
        </div>
    </>
  )
}

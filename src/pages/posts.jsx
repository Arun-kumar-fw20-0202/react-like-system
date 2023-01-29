import React, { useEffect, useState } from 'react'
import Load_post_img from '../components/load_post_img';
import $ from 'jquery';

function UserPost() {

    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        const res = await fetch(`http://localhost:8080/posts`)
        const json = await res.json()
        setPosts(json)
    }

    useEffect(() => {
        getPosts()
    }, [])


  return (
    <div className="Pmain">
        <div className="box">
            {posts.map((ele) => (
                <Load_post_img key={ele.id} props={ele} />
            ))}
            <div className="desc">

            </div>
        </div>
    </div>
  )
}

export default UserPost
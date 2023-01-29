import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AppContext"

export const Load_post_btns = ({id}) => {

    const {user,isAuth} = useContext(AuthContext)
    const [likeCount, setCountlike] = useState([])
    let likes = 0;
    let check = false;

    likeCount.map((ele) => (
        user.id == ele.userId && id == ele.postId ? check = true: ""
    ))
    // console.log(check)

    likeCount.map((ele) => (
        id === ele.postId ? likes++ : 0
    ))

    const getPosts = async () => {
        const res = await fetch(`http://localhost:8080/likes`)
        const json = await res.json()
        setCountlike(json)
    }

    useEffect(() => {
        getPosts()
    }, [])



    const handleLike = async (id) => {
      const likes = {
        postId: id,
        userId: user.id
      }

        let res = await fetch(`http://localhost:8080/likes`,{
            method: 'POST',
            body: JSON.stringify(likes),
            headers:{
                'Content-Type': 'application/json',
            }
        })
        let data = await res.json();
        setCountlike([...likeCount,likes])
    }
    return (
        <>
            <div style={{display: "flex", gap: "10px"}} className="btns">
                {isAuth ? 
                    check ? 
                        <span style={{cursor: "pointer"}}>
                            <i className="fa fa-heart" style={{color: "red"}}></i>
                            {" "}
                            {likes}
                        </span>:
                        <span onClick={()=> handleLike(id)} style={{cursor: "pointer"}}>
                            <i className="fa fa-heart-o"></i>
                            {" "}
                            {likes}
                        </span>
                        
                : <span style={{cursor: "pointer"}}>
                    <i className="fa fa-heart-o"></i>
                    {" "}
                    {likes}
                </span>}
                <span style={{cursor: "pointer"}}>
                    <i className="fa fa-comment-o"></i>
                </span>
            </div>
        </>
    )
}

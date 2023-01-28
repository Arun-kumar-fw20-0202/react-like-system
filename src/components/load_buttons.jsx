
export const Load_post_btns = ({id,handleLike}) => {
    return (
        <>
            <div style={{display: "flex", gap: "10px"}} className="btns">
                <span onClick={()=> handleLike(id)} style={{cursor: "pointer"}}>
                    <i className="fa fa-heart-o"></i>{ " "}
                    0
                </span>                    
                <span style={{cursor: "pointer"}}>
                    <i className="fa fa-comment-o"></i>
                </span>
            </div>
        </>
    )
}

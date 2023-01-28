import React from 'react'
import { Load_post_btns } from './load_buttons'


export default function Load_post_img({props}){

    const {id,image_url} = props
    const handleLike = (id) => {
        alert(id)
    }

  return (
    <>
        <img width="120px" src={image_url} alt="" />
        <Load_post_btns handleLike={handleLike} key={id} id={id} />
        <br />
    </>
  )
}

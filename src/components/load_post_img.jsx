import React, { useContext } from 'react'
import { Load_post_btns } from './load_buttons'
import $ from 'jquery';
import { AuthContext } from '../context/AppContext';

export default function Load_post_img({props}){

  const {id,image_url} = props

  return (
    <>
        <img width="120px" src={image_url} alt="" />
        <Load_post_btns key={id} id={id} />
        <br />
    </>
  )
}

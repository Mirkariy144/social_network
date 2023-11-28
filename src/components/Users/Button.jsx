import React from "react";
import c from './Users.module.css'

let Button = ({title, onClick, id, followingId}) => {
  return (
    <button disabled={id === followingId?true:false} className={c.Follow} onClick={onClick} >{title}</button>
  )
}

export default Button
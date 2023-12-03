import React from "react";
import c from './Users.module.css'

let Button = ({title, onClick, id, followingId, disabled}) => {
  return (
    <button disabled={followingId?.some((item) => item === id)} className={c.Follow} onClick={onClick} >{title}</button>
  )
}

export default Button
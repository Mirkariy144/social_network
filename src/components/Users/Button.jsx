import React from "react";
import c from './Users.module.css'

let Button = ({title, onClick}) => {

  return (
    <button className={c.Follow} onClick={onClick} >{title}</button>
  )
}

export default Button
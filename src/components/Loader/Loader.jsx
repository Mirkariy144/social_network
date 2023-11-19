import React from "react";
import './Loader.scss'

const Loader = () => {
  return(
    <div>
      <h1 class="intro">Meow loader</h1>
      <div class="box">
        <div class="cat">
          <div class="cat__body"></div>
          <div class="cat__body"></div>
          <div class="cat__tail"></div>
          <div class="cat__head"></div>
        </div>
      </div>
    </div>
  )
}

export default Loader
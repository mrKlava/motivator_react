import React from 'react'

import './button.scss'

/* classes: btn btn-sec btn-thr btn-big btn-contr */ 
function Button(props) {
  return (
    <button 
      className={props.className} 
      onClick={props.onClick} >
        {props.children}
    </button>
  )
}

export default Button
import React from 'react'

import './suptitle.scss'

/* classes: black white*/ 
function Suptitle(props) {
  return (
    <h1 className={ props.className? `suptitle ${props.className}` : 'suptitle' }>
    {props.children}
  </h1>
  )
}

export default Suptitle
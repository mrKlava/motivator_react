import React from 'react'

import './title.scss'

/* classes: black white*/ 
function Title(props) {
  return (
    <h1 className={ props.className? `title ${props.className}` : 'title' }>
      {props.children}
    </h1>
  )
}

export default Title
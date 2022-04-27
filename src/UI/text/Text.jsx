import React from 'react'

import './text.scss'

function Text(props) {
  return (
    <p className={ props.className? `text ${props.className}` : 'text' }>
      {props.children}
    </p>
  )
}

export default Text
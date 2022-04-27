import React from 'react'

import './carousel-item.scss'

function CarouselItem(props) {
  const data = props.data
  return (
    <div className={ props.className? `carousel-item ${props.className}` : 'carousel-item' }>
      <img className='carousel-item__img' src={data.img} alt="" />
    </div>
  )
}

export default CarouselItem
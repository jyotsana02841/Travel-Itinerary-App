import React from 'react'
import '../../styles/TravelGuide/Button.css'

const Button = ({item}) => {
  return (
    <div className='btn'>
      <button>{item.title} </button>
    </div>
  )
}

export default Button

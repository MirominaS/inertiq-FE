import React from 'react'
import './Card.css'

const Card = ({image,studentName,stream,percentage,isFocus = false}) => {
  
  return (
    <div className={`card-container ${ isFocus && 'card-container-focus' }`}>
        <div className='card-container-image'>
              <img src={image} alt="" />
              <div className='details'>
                  <div>{studentName}</div>
                  <div>{stream}</div> 
                  <div>{percentage}</div> 
              </div>
        </div>
    </div>
  )
}

export default Card
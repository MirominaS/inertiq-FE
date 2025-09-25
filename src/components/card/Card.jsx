import React from 'react'
import './Card.css'

const Card = ({image,studentName,stream,percentage}) => {
  
  return (
    <div className='card-container'>
        <div className='image'>
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
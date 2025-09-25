import React from 'react'
import './Button.css'

const Button = ({label,onClick,width='100px'}) => {
  return (
    <div className='button-container'>
    <button onClick = {onClick} style={{width}}> {label}</button>        
    </div>
  ) 
}

export default Button
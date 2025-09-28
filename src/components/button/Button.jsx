import React from 'react'
import './Button.css'

const Button = ({label,onClick,width='100px',type}) => {
  return (
    <div className='button-container'>
    <button onClick = {onClick} style={{width}} type={type}> {label}</button>        
    </div>
  ) 
}

export default Button
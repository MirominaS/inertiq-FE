import React from 'react'
import './Input.css'

const Input = ({width = '100px',height = '30px',handleChange,placeholder,value,type,maxWidth}) => {
    
  return (
    <div className='input-container'>
        <input 
            type={type} 
            value={value}
            onChange ={handleChange} 
            placeholder={placeholder} 
            style={{width,height,maxWidth}}
        />
    </div>
  )
}

export default Input
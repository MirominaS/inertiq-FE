import React from 'react'
import './Input.css'

const Input = ({width = '100px',height = '30px',handleChange,placeholder,value,type}) => {
    
  return (
    <div className='input-container'>
        <input 
            type={type} 
            value={value}
            onChange ={handleChange} 
            placeholder={placeholder} 
            style={{width,height}}
        />
    </div>
  )
}

export default Input
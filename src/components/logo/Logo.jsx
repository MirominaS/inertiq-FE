import React from 'react'
import './Logo.css'

const Logo = ({height="auto"}) => {
  return (
    <div className='logo-container'>
        <img src="/src/assets/main/logo.svg" alt="logo" height={height} />

    </div>
  )
}

export default Logo
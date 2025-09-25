import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  const handleClick = () => {
      alert("Button Clicked!")
  }
  return (
    <div className='newsletter-container'>
        <div className='newsletter-details'>
            <div className='newsletter-text'>
                <div className='heading'>Stay Tuned!</div>
                <div className='text-content'>Subscribe to receive the latest news and updates about TDA.
                        We promise not to spam you!
                 </div>
               
            </div>
            <div className='newsletter-input'>
                <input type="text" placeholder='Enter email address' />
                <button onClick={handleClick}>continue</button>
            </div>
        </div>

    </div>
  )
}

export default NewsLetter
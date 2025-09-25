import React from 'react'
import './HomeBanner.css'
import StateCount from '../stateCount/StateCount'
import homeScreen from '/src/assets/main/homeScreen.svg'

const HomeBanner = () => {
  return (
    <div className='home-banner-container'>
        <div className='home-banner-text'>
            <div>main P</div>
            <div>sub P</div>
            <div>
                <StateCount />
                <StateCount/>
            </div>
            <button/> 
        </div>
        
        <div className='image'>
          <img src={homeScreen} alt="" className='home-image'/>
        </div>
        
              
    </div>
  )
}

export default HomeBanner
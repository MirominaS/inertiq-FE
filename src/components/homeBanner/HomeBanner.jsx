import React from 'react'
import './HomeBanner.css'
import StateCount from '../stateCount/StateCount'
import Button from '../button/Button'
import homeScreen from '/src/assets/main/homeScreen.svg'
import { FaAnglesRight } from "react-icons/fa6";

const HomeBanner = () => {
  const paperCount = [200]
  const studentCount = [152]
  return (
    <div className='home-banner-container'>
        <div className='home-banner-text'>
            <div className='home-banner-text-head'>
              <h3><span className='h3-color'>Empowering</span> minds, shaping futures...</h3>
              <h2>Unlock your <span className='h2-color'>potential</span> with every step!</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore 
                  nisl tincidunt eget. Lectus mauris eros in vitae .</p>
            </div>

            <div className='home-banner-state-count'>
              <StateCount count={paperCount} label='Papers' />
              <StateCount count={studentCount} label='Students'/>
            </div>
            <div className='home-banner-button'>
              <div className='home-banner-button-in'><Button label={"Log in to explore More"} width="250px"/></div>
              <div className='home-banner-button-icon'><FaAnglesRight /></div>
              
              
            </div>            
        </div>
        
        <div className='image'>
          <img src={homeScreen} alt="" className='home-image'/>
        </div>
        
              
    </div>
  )
}

export default HomeBanner
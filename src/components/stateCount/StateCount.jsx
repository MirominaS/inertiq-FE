import React from 'react'
import './StateCount.css'

const StateCount = ({count = 0,label = ""}) => {
  return (
    <div className='state-count-component'>
        <div className='state-count'>{count}+</div>
        <div className='state-label'>{label}</div>
    </div>
  )
}

export default StateCount
import React from 'react'
import './FooterMainDetails.css'

const FooterMainDetails = ({heading, listNames=[]}) => {
  return (
    <div>
        <div className='footer-main-general'>
            <h3>{heading}</h3>
            {
                listNames?.map((listName,index) => {
                   return <div className='text' key={index}>{listName}</div>
                })
            }
           
        </div>
    </div>
  )
}

export default FooterMainDetails
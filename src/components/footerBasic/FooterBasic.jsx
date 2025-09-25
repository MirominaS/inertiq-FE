import React from 'react'
import './FooterBasic.css'
import Logo from '../logo/Logo'
import { FaRegCopyright } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const FooterBasic = () => {
  return (
    <div className='footer-basic-container'>
        <div className='footer-basic-left'>
            <div>
              <Logo height='60px'/>
            </div>
            <div className='footer-copy-rights'>
              <FaRegCopyright />
              <p>2025 All Rights Reserved</p>
            </div>
        </div>
        <div className='footer-basic-right'>
            <div><FaFacebookF /></div>
            <div><FaLinkedin /></div>
            <div><FaInstagram /></div>
            <div><FaXTwitter /></div>
        </div>
    </div>
  )
}

export default FooterBasic
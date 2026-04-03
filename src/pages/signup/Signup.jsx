import React, { useState } from 'react'
import './Signup.css'
import Logo from '../../components/logo/Logo'
import FooterBasic from '../../components/footerBasic/FooterBasic'
import Input from '../../components/input/Input'
import Dropdown from '../../components/dropdown/Dropdown'
import Button from '../../components/button/Button'
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox  } from "react-icons/md";

const Signup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
 

   const streams = [
    {label:"Select",id:0},
    {label:"Bio Science",id:1},
    {label:"Physical Science",id:2},
    {label:"Technology",id:3},
    {label:"Commerce",id:4},
    {label:"Arts",id:5}
  ]

  const  handleFirstname = (fname) => {
    setFirstname(fname.target.value)
    console.log(firstname)
  }

  const handleLastname = (lname) => {
    setLastname(lname.target.value)
    console.log(lastname)
  }

  return (
    <div className='signup-container'>
      <div className='signup-logo'>
        <Logo/>
      </div>
      <div className='signup-input'>
        <div className='signup-input-title'>Create Account</div>
        <div className='signup-input-name'>
          <div className='signup-input-firstname'>
            <Input 
              maxWidth="400px"
              type="text"
              width='80%'
              height='35px'
              placeholder={"Firstname"}
              handleChange={handleFirstname}
            />
          </div>
          <div className='signup-input-lastname'>
            <Input
              maxWidth="400px"
              type="text"
              width='80%'
              height='35px'
              placeholder={"Lastname"}
              handleChange={handleLastname}
            />
          </div>
        </div>
        <div className='signup-input-mail-stream'>
          <div className='signup-input-email'>
            <Input
              maxWidth="400px"
              type="text"
              width='80%'
              height='35px'
              placeholder={"Email"}
            />
          </div>
          <div className='signup-input-stream'>
            <Dropdown 
              listItems={streams} 
              text={"Streams"}
              height='37px' 
              width='83%'
              backgroundColor="#E8D9E5"
              border="none"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderRadius="5px"
              textAlign="left"
              padding="5px"
              color="rgb(158, 158, 158)"
              
            />
          </div>
        </div>
        <div className='signup-input-password'>
          <div className='signup-input-pswd'>
            <Input
              maxWidth="400px"
              type="password"
              width='80%'
              height='35px'
              placeholder={"Password"}
            />
          </div>
          <div className='signup-input-conf-pswd'>
            <Input
              maxWidth="400px"
              type="password"
              width='80%'
              height='35px'
              placeholder={"Confirm Password"}
              
            />
          </div>
        </div>
        <div className='signup-input-terms'>
          <div className='signup-input-checkbox'><MdOutlineCheckBoxOutlineBlank /><MdOutlineCheckBox /></div>
          <div className='signup-input-term-text'>Agree to the Terms and Conditions</div>
        </div>
        <div className='signup-input-button'>
          <Button label={"Create Account"} width='91%'/>
        </div>
      </div>
      <div className='signup-footer'>
        <FooterBasic/>
      </div>
    </div>
  )
}

export default Signup
import React, { useState } from 'react'
import "./Login.css"
import Input from '../../components/input/Input'
import Logo from '../../components/logo/Logo'
import FooterBasic from '../../components/footerBasic/FooterBasic'
import Button from '../../components/button/Button'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [userNameChange, setUserNameChange] = useState('');
  const [passwordChange,setPasswordChange] = useState('');

  const handleUserNameChange = (uname) => {
        setUserNameChange(uname.target.value)
    }

    const handlePasswordChange = (pswd) => {
      setPasswordChange(pswd.target.event)
    }

  return (
    <div className='login-container' >
      <div className='login-logo'>
        <Logo height='80px'/>
      </div>

      <div className='login-input'>
        <div className='login-title'>Log in</div>
        <div className='login-username'>
          <Input 
            height='35px'
            width='400px' 
            placeholder='Username' 
            value={userNameChange}
            handleChange={handleUserNameChange}/>
        </div>
        <div className='login-password'>
          <div className='login-password-input'>
            <Input 
              height='35px' 
              width='400px' 
              placeholder='Password'
              value={passwordChange}
              handleChange={handlePasswordChange}
            />
          </div>
          <div className='login-password-icon'>
            <FaEye />
            <FaEyeSlash />
          </div>          
          
        </div>
        <div className='login-forget-pswd'>Forget password?</div>
        <div className='login-button'>
          <Button label={"Log in"} width='400px'/>
        </div>
        <div className='login-create-acc'>Don't have an account? Click here to Create an account.</div>
      </div>

      <div>
        OR
      </div>

      <div className='login-google'>
        Continue with Google
      </div>

      <div className='login-footer'>
        <FooterBasic/>
      </div>
    </div>
  )
}

export default Login
import React, { useState } from 'react'
import "./Login.css"
import Input from '../../components/input/Input'
import Logo from '../../components/logo/Logo'
import FooterBasic from '../../components/footerBasic/FooterBasic'
import Button from '../../components/button/Button'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password,setPassword] = useState('');
  const [showPassword,setShowPassword] = useState(false)
  const [error,setError] = useState({})
  const [displayMsg,setDisplayMsg] = useState("")

  const handleUserName = (uname) => {
        setUserName(uname.target.value)
    }

    const handlePassword = (pswd) => {
      setPassword(pswd.target.value)
    }

    const handlePasswordIcon = () => {
      setShowPassword(!showPassword)
    }

    const validation = () => {
      let error = {username:"",pswrd:""};
      let valid = true;
      if(!userName.trim()){
        error.username = "Username is required"
        setUserName("")
        valid = false;
      }else if(userName.length < 5){
        error.username = "Username should be atlest 6 charectors"
        setUserName("")
        valid = false;
      }
      if(!password.trim()){
        error.pswrd = "Password is required"
        setPassword("")
        valid = false;
      }else if(password.length < 8){
        error.pswrd = "Password should contain atleast 8 char"
        setPassword("")
        valid = false;
      }
      setError(error)
      return valid;
    }    

    const handleClick = () => {
      const validate = validation()
      let message = ""
      if(validate ===true){
        message = "Login Success!"
        setUserName("")
        setPassword("")
      }else{
        message = "Enter Username and Password"
      }
      setDisplayMsg(message)
    }
  return (
    <div className='login-container'>
      <div className='login-logo'>
        <Logo height='80px'/>
        <span className='login-message'>{displayMsg}</span>
      </div>

      <div className='login-input'>
        <div className='login-title'>Log in</div>
        <div className='login-username'>
          <Input 
            height='35px'
            width='100%' 
            maxWidth='400px' 
            placeholder='Username' 
            value={userName}
            handleChange={handleUserName}
          />
            {error.username && <span className='login-error-message'>{error.username}</span>}
        </div>
        <div className='login-password'>
          <div className='login-password-input'>
            <Input 
              height='35px' 
              width='100%' 
              maxWidth='400px'
              placeholder='Password'
              type={!showPassword ? "password" : "text"}
              value={password}
              handleChange={handlePassword}
            />
            {error.pswrd && <span className='login-error-message'>{error.pswrd}</span>}
            <div className='login-password-icon' onClick={handlePasswordIcon}>
              {showPassword ? <FaEye /> :<FaEyeSlash />}
            </div>  
          </div>
               
          
        </div>
        <div className='login-forget-pswd'>Forget password?</div>
        <div className='login-button'>
          <Button label={"Log in"} width='80%' onClick={handleClick}/>
        </div>
        <div className='login-create-acc'>Don't have an account? Click here to Create an account.</div>
      </div>

      <div>
        OR
      </div>

      <div className='login-google'>
        <div><FcGoogle /></div>
        <div>Continue with Google</div>
        
      </div>

      <div className='login-footer'>
        <FooterBasic/>
      </div>
    </div>
  )
}

export default Login
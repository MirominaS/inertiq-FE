import React, { useState } from 'react'
import './Signup.css'
import Logo from '../../components/logo/Logo'
import FooterBasic from '../../components/footerBasic/FooterBasic'
import Input from '../../components/input/Input'
import Dropdown from '../../components/dropdown/Dropdown'
import Button from '../../components/button/Button'
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox  } from "react-icons/md";
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email,setEmail] = useState(''); 
  const [stream, setStream] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const [showPassword,setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false)
  const [error,setError] = useState({})
  const [displayMsg,setDisplayMsg] = useState("")
  const [showCheckbox, setShowCheckbox] = useState(false) 

   const streams = [
    {label:"Select",id:0},
    {label:"Bio Science",id:1},
    {label:"Physical Science",id:2},
    {label:"Technology",id:3},
    {label:"Commerce",id:4},
    {label:"Arts",id:5}
  ]

  const  handleFirstname = (fname) => {
    setFirstName(fname.target.value)
    console.log(firstName)
  }

  const handleLastname = (lname) => {
    setLastName(lname.target.value)
    console.log(lastName)
  }

  const handleEmail = (mail) => {
    setEmail(mail.target.value)
    console.log(email)
  }

  const handleStream = (str) => {
    setStream(str)
    console.log("Stream",str)
  }

  const handlePassword = (pswd) => {
    setPassword(pswd.target.value)
    console.log(password)
  } 

  const handleConfirmPassword = (cpswd) => {
    setConfirmPassword(cpswd.target.value)
    console.log(confirmPassword)
  }

  const handlePasswordICon = () => {
    setShowPassword(!showPassword)
  }

  const handleConfPasswordICon = () => {
    setShowConfPassword(!showConfPassword)
  }

  const handleCheckboxIcon = () => {
    setShowCheckbox(!showCheckbox)
  }

   const validation = () => {
      let error = {f_name:"",l_name:"",e_mail:"",stream:"",pswrd:"",cpswrd:"",term:""};
      let valid = true;
      if(!firstName.trim() && !lastName.trim() && !email.trim() && !stream.trim()){
        error.f_name = "Firstname is required"
        error.l_name = "Lastname is required"
        error.e_mail = "Email is required"
        error.stream = "Select a Stream"
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
       if(!confirmPassword.trim()){
        error.cpswrd = "Password is required"
        setConfirmPassword("")
        valid = false;
      }else if(confirmPassword !== password ){
        error.cpswrd = "Please confirm your Password"
        setConfirmPassword("")
        valid = false;
      }
      if(showCheckbox === false){
          error.term = "Agree to terms and conditions"
          valid = false
      }
      setError(error)
      return valid;
    }    

    const handleClick = () => {
      const validate = validation()
      let message = ""
      if(validate ===true){
        message = "Signup Success!"
        setFirstName("");
        setLastName("");
        setEmail("");
        setStream("");
        setPassword("");
        setConfirmPassword("");
      }else{
        message = "Please enter your details"
      }
      setDisplayMsg(message)
    }

  return (
    <div className='signup-container'>
      <div className='signup-logo'>
        <Logo/>
        <span className='signup-message'>{displayMsg}</span>
      </div>
      <div className='signup-input'>
        <div className='signup-input-title'>Create Account</div>
        <div className='signup-input-name'>
          <div className='signup-input-firstname'>
            <Input 
              maxWidth="400px"
              type="text"
              value={firstName}
              width='80%'
              height='35px'
              placeholder={"Firstname"}
              handleChange={handleFirstname}
            />
            {error.f_name && <span className='signup-error-message'>{error.f_name}</span>}
          </div>
          <div className='signup-input-lastname'>
            <Input
              maxWidth="400px"
              value={lastName}
              type="text"
              width='80%'
              height='35px'
              placeholder={"Lastname"}
              handleChange={handleLastname}
            />
            {error.l_name && <span className='signup-error-message'>{error.l_name}</span>}
          </div>
        </div>
        <div className='signup-input-mail-stream'>
          <div className='signup-input-email'>
            <Input
              maxWidth="400px"
              type="text"
              value={email}
              width='80%'
              height='35px'
              placeholder={"Email"}
              handleChange={handleEmail}
            />
            {error.e_mail && <span className='signup-error-message'>{error.e_mail}</span>}
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
              dataSent={handleStream}  
              value = {stream}    
            />{error.stream && <span className='signup-error-message'>{error.stream}</span>}
          </div>
        </div>
        <div className='signup-input-password'>
          <div className='signup-input-pswd'>
            <Input
              maxWidth="400px"
              type={!showPassword ? "Password" : "text"}
              width='80%'
              height='35px'
              placeholder={"Password"}
              handleChange={handlePassword}
              value={password}
            />
            {error.pswrd && <span className='signup-error-message'>{error.pswrd}</span>}
            <div className='sigup-password-icon' onClick={handlePasswordICon}>
                {showPassword ? <FaEye/> : <FaEyeSlash/>}
            </div>
          </div>
          <div className='signup-input-conf-pswd'>
            <Input
              maxWidth="400px"
              type={!showConfPassword ? "Password" : "text"}
              width='80%'
              height='35px'
              placeholder={"Confirm Password"}
              handleChange={handleConfirmPassword} 
              value={confirmPassword}             
            />
            {error.cpswrd && <span className='signup-error-message'>{error.cpswrd}</span>}
            <div className='sigup-password-icon' onClick={handleConfPasswordICon}>
                {showConfPassword ? <FaEye/> : <FaEyeSlash/>}
            </div>
          </div>
        </div>
        <div className='signup-input-terms'>
          <div className='signup-terms'>
            <div className='signup-input-checkbox' onClick={handleCheckboxIcon}>
            {showCheckbox ? <MdOutlineCheckBox />  : <MdOutlineCheckBoxOutlineBlank />}
          </div>
          <div className='signup-input-term-text'>Agree to the Terms and Conditions</div>

          </div>
          
          {error.term && <span className='signup-error-message'>{error.term}</span>}
        </div>
        <div className='signup-input-button'>
          <Button label={"Create Account"} width='91%' onClick={handleClick}/>
        </div>
      </div>
      <div className='signup-footer'>
        <FooterBasic/>
      </div>
    </div>
  )
}

export default Signup
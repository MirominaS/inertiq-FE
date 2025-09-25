import React from 'react'
import "./FooterMain.css"
import FooterMainDetails from '../footerMainDetails/FooterMainDetails'

const FooterMain = () => {
  return (
    
    <div className='footer-main-container'>
        <div className='footer-main-details'> 
            <FooterMainDetails heading={"General"} listNames={["Sign Up","Help","Privacy Policy","Blogs","Developers"]}/>
            <FooterMainDetails heading={"Browse"} listNames={["Biological Science", "Physical Science","Technology", "Commerce","Arts"]}/>
            <FooterMainDetails heading={"Resources"} listNames={["Academy","Hosting","Theme","Support"]}/>
            <FooterMainDetails heading={"Company"} listNames={["About Us","Career","FAQs","Team","Contact Us"]}/>
        </div>        
        <FooterMainDetails heading={"Logo"}/>
    </div>
  )
}

export default FooterMain
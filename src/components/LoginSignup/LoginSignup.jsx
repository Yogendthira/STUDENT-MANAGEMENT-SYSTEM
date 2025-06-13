import React from 'react'
import './LoginSignup.css'
import email_icon from '../../assets/email-icon.png'
import password_icon from '../../assets/password-icon.png'
import user_icon from '../../assets/user-icon.png'


const LoginSignup = () => {
  return (
    <div className="Container">
      <div className="Header">
        <div className="Text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="Inputs">
        <div className="Input">
        <img src={user_icon} alt=""/>
        <input type="text"/>
       </div>
      </div>
      <div className="Inputs">
        <div className="Input">
        <img src={email_icon} alt=""/>
        <input type="email"/>
       </div>
      </div>
      <div className="Inputs">
        <div className="Input">
        <img src={password_icon} alt=""/>
        <input type="password"/>
       </div>
      </div>
    </div>
  )
  
}



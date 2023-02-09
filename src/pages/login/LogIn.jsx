import './LogIn.css'
import React from "react";
import { Link } from 'react-router-dom'
export default function LogIn() {
  return (
    <div className='logIn'>
        <span className="LogInTitle">Log In</span>
        <form action="" className="logInForm">
        <label htmlFor="">Email</label>
        <input className='logInInput' type="email" name="" id="" placeholder='Enter your email .....' />
        <label htmlFor="">Password</label>
        <input className='logInInput'type="password" name="" id="" placeholder='Enter your Password .....' />
        <button className="logInButton">Log In</button>
        </form>
        <button className="logInRegisterButton">
          <Link className="link" to="/register">Register</Link>
        </button>
    </div>
  )
}

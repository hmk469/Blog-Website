import './Register.css'
import React from "react";
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <div>
       <div className='register'>
        <span className="registerTitle">Register</span>
        <form action="" className="registerForm">
        <label htmlFor="">Username</label>
        <input className='registerInput' type="text" name="" id="" placeholder='Enter your username .....' />
        <label htmlFor="">Email</label>
        <input className='registerInput' type="email" name="" id="" placeholder='Enter your email .....' />
        <label htmlFor="">Password</label>
        <input className='registerInput'type="password" name="" id="" placeholder='Enter your Password .....' />
        <button className="registerButton">Register</button>
        </form>
        <button className="registerLonInButton">
        <Link className="link" to="/login">Log In</Link>
        </button>
    </div>
    </div>
  )
}

export default Register

import './Settings.css'
import Sidebar from '../../components/sidebar/Sidebar'
import React from "react";

export default function Settings() {
  return (
    <div className='settings'>
      <div className="settingWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDelete Title">Delete  Account</span>
        </div>
        <div className="settingsForm">
            <label htmlFor="">Profile Picture</label>
            <div className="settingsPP">
                <img src="https://images.freeimages.com/images/previews/f3b/mixer-1641816.jpg" alt="" />
                <label htmlFor="fileInput">
                <i className="fa-regular settingsPPIcon fa-user"></i>
                </label>
                <input type="file" name="" id="fileInput" style={{display:"none"}} />
            </div>
            <label htmlFor="username">Username</label>
            <input type="text" name="" id="username"  />
            <label htmlFor="email">Your Email</label>
            <input type="email" name="" id="email"  />
            <label htmlFor="password">Your password</label>
            <input type="password" name="" id="password"  />
            
            <button className="settingsSubmit">Update</button>

        </div>
      </div>
      <Sidebar/>
    </div>
  )
}

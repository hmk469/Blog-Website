import React from 'react'
import "./Header.css"
function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
       <span className="headerTitleSm">React & Node</span>
       <span className="headerTitleLg">Blog</span>
      </div>
      <img className='headerImg' src="https://images.pexels.com/photos/15414190/pexels-photo-15414190.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
    </div>
  )
}

export default Header

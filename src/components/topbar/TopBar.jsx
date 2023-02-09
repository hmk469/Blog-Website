 import './TopBar.css'
 import React from "react";
 import { Link } from 'react-router-dom';
 function TopBar() {
  const user= true;

   return (
     <div className='top'>
    <div className='topLeft'>
    <i class="fa-brands  topIcon fa-square-facebook"></i>
    <i class="fa-brands topIcon fa-twitter"></i>
    <i class="fa-brands topIcon fa-pinterest"></i>
    <i class="fa-brands topIcon fa-instagram"></i>
    </div>
    <div className='topCenter'>
        <ul className='topList'>
        <li className='topListItem'> 
       <Link className='link' to="/">HOME</Link>
         </li>

        <li className='topListItem'> 
        <Link className='link' to="/">CONTACT</Link> 
        </li>

        <li className='topListItem'> 
        <Link className='link' to="/write">WRITE</Link> 
        </li>

        <li className='topListItem'> 
        {user && "LOGOUT"} 
        </li>

        </ul>
    </div>
    <div className='topRight'>
      {
        user ? (
          <img className='topImg' src="https://images.pexels.com/photos/7505197/pexels-photo-7505197.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        ):
          (
           <ul className='topList'>
            <li className='topListItem'>
            <Link className='link' to="/login">LOGIN</Link>
            </li >
            
            <li className='topListItem'> 
            <Link className='link' to="/register">REGISTER</Link>
            </li>
            </ul>

        )
      }
        <i class="fa-solid searchIcon fa-magnifying-glass"></i>
    </div>
     </div>
   );
 }
 
 export default TopBar
 
import "./Sidebar.css";
import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar ">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/15434796/pexels-photo-15434796.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et illo,
          corrupti praesentium inventore, id consequuntur consequatur nulla
          necessitatibus dolorem eum ab repudiandae maiores distinctio, facere
          cumque ad doloremque placeat voluptatem!
        </p>
         <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i class="fa-brands  sidebarIcon  fa-square-facebook"></i>
          <i class="fa-brands sidebarIcon fa-twitter"></i>
          <i class="fa-brands sidebarIcon  fa-pinterest"></i>
          <i class="fa-brands sidebarIcon  fa-instagram"></i>
        </div>
      </div>
      </div>
     
    </div>
  );
};

export default Sidebar;

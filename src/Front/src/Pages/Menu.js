import React from "react";
import { MenuList } from "../helper/MenuList";
import MenuItem from "../Components/MenuItem";
import "../Style/Menu.css";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


function Menu() {
  return (
    <div>
      <Navbar/>
    <div className="menu">
      {/* <h1 className="menuTitle">Services</h1> */}
      
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              
            />
          );
        })}
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Menu;
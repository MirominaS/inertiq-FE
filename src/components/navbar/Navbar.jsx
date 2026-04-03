import React, { useState } from "react";
import Logo from "../logo/Logo";
import Dropdown from "../dropdown/Dropdown";
import { useEffect } from "react";
import Button from "../button/Button";
import Search from "../search/Search";
import "./Navbar.css";

const Navbar = ({handleInputChange,searchValue,handleLoginClick}) => {

  const streams = [
    {label:"All",id:0},
    {label:"Bio Science",id:1},
    {label:"Physical Science",id:2},
    {label:"Technology",id:3},
    {label:"Commerce",id:4},
    {label:"Arts",id:5}
  ]

  
 
 
  const handleSignupClick = () => {
    alert("Signup Clicked!");
  };
  return (
    <div className="nav-container">
      <div className="logo">
          <Logo height="60px" />       
      </div>

      <div className="search-dropdown">
        <div className="dropdown">
          <Dropdown text="Streams" listItems={streams} />
        </div>
        <div className="search">
          <Search
            type={"text"}
            value={searchValue}
            handleChange={handleInputChange}
          />
        </div>
      </div>
      <div className="login-signup">
        <div className="login">
          <Button label={"Log in"} onClick={handleLoginClick}  />
        </div>
        <div className="signup">
          <Button label={"Sign up"} onClick={handleSignupClick} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

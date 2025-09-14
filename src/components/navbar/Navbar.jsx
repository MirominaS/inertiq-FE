import React, { useState } from "react";
import Logo from "../logo/Logo";
import Dropdown from "../dropdown/Dropdown";
import { useEffect } from "react";
import Button from "../button/Button";
import Search from "../search/Search";
import "./Navbar.css";

const Navbar = () => {
  
  const [searchValue, setSearchValue] = useState("");

  const streams = [
    {label:"All",id:0},
    {label:"Bio Science",id:1},
    {label:"Physical Science",id:2},
    {label:"Technology",id:3},
    {label:"Commerce",id:4},
    {label:"Arts",id:5}
  ]

  
  const hanldInputChange = (search) => {
    setSearchValue(search.target.value);
    console.log(search.target.value);
  };
  const handleLoginClick = () => {
    alert("Login Clicked!");
  };
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
            handleChange={hanldInputChange}
          />
        </div>
      </div>
      <div className="login-signup">
        <div className="login-container">
          <Button label={"Log in"} onClick={handleLoginClick} />
        </div>
        <div className="signup">
          <Button label={"Sign up"} onClick={handleSignupClick} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import Logo from "../logo/Logo";
import Dropdown from "../dropdown/Dropdown";
import { useEffect } from "react";
import Button from "../button/Button";
import Search from "../search/Search";
import "./Navbar.css";

const Navbar = () => {
  const [options, setOptions] = useState([]);
  const [streams, setStreams] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  const items = ["Bio Science", "Physical Science", "Technology", "Commerce"];

  const handleStreamChange = (str) => {
    setStreams(str.target.value);
  };
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
          <Dropdown text="Streams" listItems={items} />
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
          <Button label={"Login"} onClick={handleLoginClick} />
        </div>
        <div className="signup">
          <Button label={"Signup"} onClick={handleSignupClick} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import Logo from "../logo/Logo";
import Dropdown from "../dropdown/Dropdown";
import { useEffect } from "react";
import Button from "../button/Button";
import Search from "../search/Search";
import './Navbar.css'

const Navbar = () => {
  const [options, setOptions] = useState([]);
  const [streams, setStreams] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    setOptions([
      { value: 1, label: "Physical Science" },
      { value: 2, label: "Biological Science" },
      { value: 3, label: "Technology" },
    ]);
  }, []);
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
      <div className="logo-dropdwon">
        <div className="logo-container">
          <Logo height="60px" />
        </div>
        <div className="dropdown-container">
          <Dropdown
            label={"Streams"}
            options={options}
            handleChange={handleStreamChange}
            value={streams}
            minWidth={10}
          />
        </div>
      </div>

      <div className="search-container">
        <Search
          type={"text"}
          value={searchValue}
          handleChange={hanldInputChange}
        />
      </div>
      <div className="login-signup">
        <div className="login-container">
          <Button label={"Login"} onClick={handleLoginClick} />
        </div>
        <div className="signup-container">
          <Button label={"Signup"} onClick={handleSignupClick} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

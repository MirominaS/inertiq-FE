import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.css";

const Search = ({ type, value, handleChange }) => {
  const[keyChecker, setKeyChecker] = useState(false);
  return (
    <div className="search-container">
      <div className="search-bar">
        <div className="search-icon">
          <FaSearch />
        </div>
        <div className="search-input">
          <input
            type={type}
            value={value}
            onChange={handleChange}
            onKeyDown={(e) => {
              setKeyChecker(e.key === "Enter") //direct implementation
              // if (e.key === "Enter"){
              //   setKeyChecker(true)
              // } else {
              //   setKeyChecker(false)
              // }              
            }}
           // style={(value === "" && keyChecker) ? {border:"1px solid red"}:{border:"1px solid purple"}} //ternary operator(if else condition)
            style={{border:`1px solid ${(value === "" && keyChecker) ? "red":"purple"}`}} //string interpolation
          />
        </div>
      </div>
    </div>
  );
};

export default Search;

import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import "./Dropdown.css";

 const Dropdown = ({ text, listItems }) => {
  const [showItems, setShowItems] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [mouseIn, setMouseIn] = useState(false);

  return (
    <div className="dropdown-container">
      <div className="dropdown-btn" 
        onBlur={() => {setShowItems(mouseIn)}}
        onMouseEnter={() => setMouseIn(true)}
        onMouseLeave={() => setMouseIn(false)}
      >
        <button 
          onClick={() => setShowItems((current) => !current)} //update state directly
          
        >
          <FaCaretDown />
          {listItems.filter(
            (listItem) => listItem.id === selectedItem 
          )[0]?.label|| text}
        </button>
        {showItems && (
          <div className="content">
            {listItems.map((listItem) => {
              return (
                <div
                  className="list-item"
                  key={listItem.id}
                  onClick={() => {
                    setSelectedItem(listItem.id);
                    setShowItems(false);
                  }}
                >
                  {listItem.label}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default Dropdown;
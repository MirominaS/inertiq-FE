import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import "./Dropdown.css";

 const Dropdown = ({ 
    text,
    listItems,
    width="150px",
    height="45px",
    display,
    justifyContent,
    alignItems,
    borderRadius,
    border,
    backgroundColor,
    textAlign,
    padding,
    color,
    dataSent,
    value
  }) => {
  const [showItems, setShowItems] = useState(false);
  const [mouseIn, setMouseIn] = useState(false);

  return (
    <div className="dropdown-container">
      <div className="dropdown-btn" 
        style={{width,height}}
        onBlur={() => {setShowItems(mouseIn)}}
        onMouseEnter={() => setMouseIn(true)}
        onMouseLeave={() => setMouseIn(false)}
      >
        <button 
          onClick={() => setShowItems((current) => !current)} //update state directly
          style={{display,justifyContent,alignItems,borderRadius,border,backgroundColor,textAlign,padding,color}}
        >         
          {listItems.find(item => item.id === value)?.label || text}
          <FaCaretDown />
        </button>
        {showItems && (
          <div className="content">
            {listItems.map((listItem) => {
              return (
                <div
                  className="list-item"
                  key={listItem.id}
                  onClick={() => {
                    setShowItems(false);
                    console.log(listItem)
                    dataSent(listItem.id)
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
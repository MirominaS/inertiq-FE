import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import "./Dropdown.css";

 const Dropdown = ({ text, listItems }) => {
  const [showItems, setShowItems] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <div className="dropdown-container">
      <div className="dropdown-btn">
        <button onClick={() => setShowItems((current) => !current)}>
          <FaCaretDown />
          {selectedItem || text}
        </button>
        {showItems && (
          <div className="content">
            {listItems.map((listItem, index) => {
              return (
                <div
                  className="list-item"
                  key={index}
                  onClick={() => {
                    setSelectedItem(listItem);
                    setShowItems(false);
                  }}
                >
                  {listItem}
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
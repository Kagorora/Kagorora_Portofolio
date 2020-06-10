import React from "react";
import "../style/css/nav.css";

const nav = ({ isOn, handleToggle, onColor }) => {
  return (
    <div className="container">
      <div className="nav-bar">
        <div className="nav-logo">
          <p>kagorora</p>
        </div>
        <div className="nav-link">
          <ul>
            <li>About Me</li>
            <li>Skills</li>
            <li>Project</li>
          </ul>
          <div className="react-toggle">
            <input
              checked={isOn}
              onChange={handleToggle}
              className="react-switch-checkbox"
              id={`react-switch-new`}
              type="checkbox"
            />
            <label
              style={{ background: isOn && onColor }}
              className="react-switch-label"
              htmlFor={`react-switch-new`}
            >
              <span className={`react-switch-button`} />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default nav;

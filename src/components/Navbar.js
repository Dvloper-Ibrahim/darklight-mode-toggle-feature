import React from "react";

export default function NavBar(props) {
  // function handleToggle() {}
  let navStyle = {
    backgroundColor: props.isLight ? "#f6f6f6" : "#21222A",
  };
  let lightStyle = {
    color: props.isLight ? "#2B283A" : "#918E9B",
  };
  let darkStyle = {
    color: props.isLight ? "#c0c0c0" : "white",
  };

  return (
    <nav style={navStyle}>
      <img src="assets/reactjs-icon.png" className="logo" alt="react-logo" />
      <h3 className="logo-text">ReactFacts</h3>
      <div className="toggle">
        <span style={lightStyle} className="light">
          Light
        </span>
        <label>
          <input
            className="toggle-checkbox"
            type="checkbox"
            checked={props.isLight}
            onChange={props.handleChange}
          />
          <div className="toggle-switch">
            <span className="circle"></span>
          </div>
        </label>
        <span style={darkStyle} className="dark">
          Dark
        </span>
      </div>
    </nav>
  );
}

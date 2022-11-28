import React from "react";

export default function Main(props) {
  let darkImage = "watermark-dark",
    lightImage = "watermark-light";
  let mainStyle = {
    backgroundColor: props.isLight ? "white" : "#282D35",
    color: props.isLight ? "#2B283A" : "white",
  };

  return (
    <main style={mainStyle}>
      <h1 className="heading">Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <img
        className="watermark"
        src={`assets/${props.isLight ? lightImage : darkImage}.png`}
        alt=""
      />
    </main>
  );
}

import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./App.css";

function App() {
  const [toggle, setToggle] = React.useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <div className="container">
      <Navbar isLight={toggle} handleChange={handleToggle} />
      <Main isLight={toggle} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import Nav from "./component/nav.bar";
import SocialMedia from "./component/socialMedia.js";

const App = () => {
  const [value, setValue] = useState(false);
  return (
    <div className="container">
      <Nav isOn={value} handleToggle={() => setValue(!value)} />
      <SocialMedia className="socialMedia" />
    </div>
  );
};

export default App;

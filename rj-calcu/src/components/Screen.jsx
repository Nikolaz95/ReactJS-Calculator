import React, { useState } from "react";

/* import css */
import "../components/Screen.css";

const Screen = ({ resultatValue, setResultatValue }) => {
  return (
    <div>
      <div className="theme">
        <span className="colorTheme">1</span>
        <span className="colorTheme">2</span>
        <span className="colorTheme">3</span>
      </div>
      <div className="screen">
        <p>{resultatValue}</p>
      </div>
    </div>
  );
};

export default Screen;

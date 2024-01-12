import React, { useEffect, useState } from "react";

/* import css */
import "../components/Screen.css";

const Screen = ({ resultatValue, setResultatValue }) => {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || "gradientOne")
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme))
    document.documentElement.removeAttribute("class")
    document.documentElement.classList.add(theme)
  }, [theme])
  return (
    <div>
      <div className="themeSelector">
        <span className={theme === "gradientOne" ? "gradientOne activeTheme" : "gradientOne"} onClick={() => setTheme("gradientOne")}></span>
        <span className={theme === "gradientTwo" ? "gradientTwo activeTheme" : "gradientTwo"} onClick={() => setTheme("gradientTwo")}></span>
        <span className={theme === "gradientThree" ? "gradientThree activeTheme" : "gradientThree"} onClick={() => setTheme("gradientThree")}></span>
      </div>
      <div className="screen">
        <p>{resultatValue}</p>
      </div>
    </div>
  );
};

export default Screen;

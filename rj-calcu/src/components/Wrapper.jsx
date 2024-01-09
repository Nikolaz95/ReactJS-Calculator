import React, { useState } from "react";

/* import css */
import "../components/Wrapper.css";
import Screen from "./Screen";
import ButtonBox from "./ButtonBox";

const Wrapper = () => {
  const [resultatValue, setResultatValue] = useState("0");

  return (
    <div className="content">
      <div className="wrapper">
        <Screen
          resultatValue={resultatValue}
          setResultatValue={setResultatValue}
        />
        <ButtonBox
          resultatValue={resultatValue}
          setResultatValue={setResultatValue}
        />
      </div>
    </div>
  );
};

export default Wrapper;

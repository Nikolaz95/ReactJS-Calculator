import React, { useState } from "react";

/* import css */
import "../components/ButtonBox.css";

/* import css */
import { IoBackspace } from "react-icons/io5";

const ButtonBox = ({ resultatValue, setResultatValue }) => {
  const [buttonValue, setButtonValue] = useState("");

  const handleCalculate = () => {
    try {
      setResultatValue(eval(resultatValue).toString());
    } catch (error) {
      setResultatValue("Error");
    }
  };

  const handleBtnClick = (value) => {
    if (value === "C") {
      // Handle clear button
      setButtonValue("");
      setResultatValue("0");
    } else if (value === "=") {
      // Handle equal button
      try {
        const result = eval(buttonValue);
        if (isNaN(result) || !isFinite(result)) {
          // Handle non-numeric or infinite result (e.g., division by zero)
          setResultatValue("Error");
        } else {
          setResultatValue(result.toString());
        }
      } catch (error) {
        // Handle other errors
        setResultatValue("Error");
      }
      setButtonValue("");
    } else if (typeof value === "function") {
      // Handle other buttons
      value();
    } else {
      // Handle other buttons
      setButtonValue((prevValue) => prevValue + value);
    }
  };

  console.log(buttonValue);

  /* function reset button click */
  const handleClear = () => {
    setButtonValue("");
  };

  /* function Handle backspace button click */
  const handleBackspace = () => {
    setButtonValue((prevDisplay) => prevDisplay.slice(0, -1));
  };

  return (
    <div className="buttons">
      <button
        onClick={() => handleBtnClick(handleClear)}
        className="clear color"
      >
        Clear
      </button>
      <button
        onClick={() => handleBtnClick(handleBackspace)}
        className="backspace color"
      >
        <IoBackspace />
      </button>
      <button name="/" className="color" onClick={() => handleBtnClick("/")}>
        /
      </button>
      <button name="7" onClick={() => handleBtnClick("7")}>
        7
      </button>
      <button name="8" onClick={() => handleBtnClick("8")}>
        8
      </button>
      <button name="9" onClick={() => handleBtnClick("9")}>
        9
      </button>
      <button name="*" className="color" onClick={() => handleBtnClick("7")}>
        *
      </button>
      <button name="4" onClick={() => handleBtnClick("5")}>
        4
      </button>
      <button name="5" onClick={() => handleBtnClick("5")}>
        5
      </button>
      <button name="6" onClick={() => handleBtnClick("6")}>
        6
      </button>
      <button name="-" className="color" onClick={() => handleBtnClick("-")}>
        -
      </button>
      <button name="1" onClick={() => handleBtnClick("1")}>
        1
      </button>
      <button name="2" onClick={() => handleBtnClick("2")}>
        2
      </button>
      <button name="3" onClick={() => handleBtnClick("3")}>
        3
      </button>
      <button name="+" className="color" onClick={() => handleBtnClick("+")}>
        +
      </button>
      <button name="0" onClick={() => handleBtnClick("0")}>
        0
      </button>
      <button name="." className="color" onClick={() => handleBtnClick(".")}>
        .
      </button>
      <button
        onClick={() => handleBtnClick(handleCalculate)}
        className="equal color"
      >
        =
      </button>
    </div>
  );
};

export default ButtonBox;

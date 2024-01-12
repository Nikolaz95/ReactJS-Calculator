import React, { useState } from "react";


//import icon
import { MdError } from "react-icons/md";


/* import css */
import "../components/ButtonBox.css";

/* import css */
import { IoBackspace } from "react-icons/io5";

const ButtonBox = ({ resultatValue, setResultatValue }) => {

    const handleClick = (e) => {
        if (resultatValue.length >= 16) {
            setResultatValue(
                <div className="erormsg">
                    <span> <MdError className="icon-error" /> So Much Big Input</span>
                </div>
            );
            return;

        }
        if (resultatValue.charAt(0) === '0') {
            resultatValue = resultatValue.slice(1, resultatValue.length)
        }
        setResultatValue(resultatValue.concat(e.target.name));
    }

    const clear = () => {
        setResultatValue("0");
    }
    console.log(clear)

    const backSpace = () => {
        const newResultatValue = resultatValue.slice(0, -1);
        setResultatValue(newResultatValue.length > 0 ? newResultatValue : "0");
    };

    const calculate = () => {
        try {
            resultatValue = eval(resultatValue).toString()
            if (resultatValue.includes('.')) {
                resultatValue = + eval(resultatValue);
                resultatValue = resultatValue.toFixed(4).toString();
                setResultatValue(resultatValue);
            } else {
                setResultatValue(eval(resultatValue).toString());
            }
        } catch (error) {
            setResultatValue(
                <div className="erormsg">
                    <span>ERROR <MdError className="icon-error" /></span>
                </div>
            )
        }
    }

    return (
        <div className="buttons">
            <button
                onClick={clear}
                className="clear color"
            >
                Clear
            </button>
            <button
                onClick={backSpace}
                className="backspace color"
            >
                <IoBackspace />
            </button>
            <button name="/" className="color" onClick={handleClick}>
                /
            </button>
            <button name="7" onClick={handleClick}>
                7
            </button>
            <button name="8" onClick={handleClick}>
                8
            </button>
            <button name="9" onClick={handleClick}>
                9
            </button>
            <button name="*" className="color" onClick={handleClick}>
                *
            </button>
            <button name="4" onClick={handleClick}>
                4
            </button>
            <button name="5" onClick={handleClick}>
                5
            </button>
            <button name="6" onClick={handleClick}>
                6
            </button>
            <button name="-" className="color" onClick={handleClick}>
                -
            </button>
            <button name="1" onClick={handleClick}>
                1
            </button>
            <button name="2" onClick={handleClick}>
                2
            </button>
            <button name="3" onClick={handleClick}>
                3
            </button>
            <button name="+" className="color" onClick={handleClick}>
                +
            </button>
            <button name="0" onClick={handleClick}>
                0
            </button>
            <button name="." className="color" onClick={handleClick}>
                .
            </button>
            <button
                onClick={calculate}
                className="equal color"
            >
                =
            </button>
        </div>
    );
};

export default ButtonBox;

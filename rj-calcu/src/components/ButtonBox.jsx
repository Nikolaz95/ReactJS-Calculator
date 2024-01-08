import React from 'react'

/* import css */
import '../components/ButtonBox.css';

const ButtonBox = () => {
    return (
        <div className="buttons">
            <button /* onClick={clear} */ className="clear color">Clear</button>
            <button /* onClick={backSpace} */ className="backspace color">C</button>
            <button name="/" className='color' /* onClick={handleClick} */>/</button>
            <button name="7" /* onClick={handleClick} */>7</button>
            <button name="8" /* onClick={handleClick} */>8</button>
            <button name="9" /* onClick={handleClick} */>9</button>
            <button name="*" className='color' /* onClick={handleClick} */>*</button>
            <button name="4" /* onClick={handleClick} */>4</button>
            <button name="5" /* onClick={handleClick} */>5</button>
            <button name="6" /* onClick={handleClick} */>6</button>
            <button name="-" className='color' /* onClick={handleClick} */>-</button>
            <button name="1" /* onClick={handleClick} */>1</button>
            <button name="2" /* onClick={handleClick} */>2</button>
            <button name="3" /* onClick={handleClick} */>3</button>
            <button name="+" className='color' /* onClick={handleClick} */>+</button>
            <button name="0" /* onClick={handleClick} */>0</button>
            <button name="." className='color' /* onClick={handleClick} */>.</button>
            <button /* onClick={calculate} */ className="equal color">=</button>

        </div>
    )
}

export default ButtonBox
import React from 'react'

/* import css */
import '../components/Wrapper.css';
import Screen from './Screen';
import ButtonBox from './ButtonBox';

const Wrapper = () => {

    return (
        <div className="content">
            <div className="wrapper">
                <Screen />
                <ButtonBox />
            </div>
        </div>
    )
}

export default Wrapper

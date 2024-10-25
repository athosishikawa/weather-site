import React, { Component, useState } from 'react';
import '../styles/Toggle.css';

const Toggle = () => {

    const [isCelsius, setIsCelsius] = useState(true); 

    const handleToggle = () => {
        setIsCelsius(!isCelsius); 
    };
  
    const toggleStyle = {
        left: isCelsius ? '0' : '110px', 
    };

    const selectedCelciusStyle = {
        color: isCelsius ? "#FFFFFF" : "#000000",
    };
    const selectedFerenheitsStyle = {
        color: isCelsius ? "#000000" : "#FFFFFF",
    };

    return (
        <div class="form-box">

            <div className="button-box">

                <div id="btn" style={toggleStyle}></div>
                <button type="button" className="toggle-btn" style={selectedCelciusStyle} onClick={handleToggle}>°C</button>
                <button type="button" className="toggle-btn" style={selectedFerenheitsStyle} onClick={handleToggle}>°F</button>

            </div>

        </div>
      );
}

export default Toggle
import React, { Component, useState } from 'react';
import '../styles/Toggle.css';

const Toggle = ({onChange}) => {

    const [isCelsius, setIsCelsius] = useState(true); 

    const handleToggle = () => {
        const newIsCelsius = !isCelsius;
        setIsCelsius(newIsCelsius); // Update state directly
        onChange && onChange(newIsCelsius); // Pass the updated value
    };
  
    const toggleStyle = {
        left: isCelsius ? '0' : '110px', 
    };

    const selectedCelciusStyle = {
        color: isCelsius ? "#FFFFFF" : "#000000",
    };
    const selectedFarenheitsStyle = {
        color: isCelsius ? "#000000" : "#FFFFFF",
    };

    return (
        <div className="form-box">

            <div className="button-box">

                <div id="btn" style={toggleStyle}></div>
                <button type="button" className="toggle-btn" style={selectedCelciusStyle} onClick={handleToggle}>°C</button>
                <button type="button" className="toggle-btn" style={selectedFarenheitsStyle} onClick={handleToggle}>°F</button>

            </div>

        </div>
      );
}

export default Toggle
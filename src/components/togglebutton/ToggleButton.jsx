import React, { useState } from 'react';
import './ToggleButton.css';

const ToggleButton = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="toggle-container">
            <button className="toggle-button" onClick={toggleVisibility}>
                {isVisible ? '▲' : '▼'}
            </button>
            {isVisible && <div className="toggle-content">{children}</div>}
        </div>
    );
};

export default ToggleButton;

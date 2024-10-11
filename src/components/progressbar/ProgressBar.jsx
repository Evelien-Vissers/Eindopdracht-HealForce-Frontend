import React from 'react';
import PropTypes from 'prop-types';
import './Progressbar.css'
import complete from '../../assets/checkicon.png'
import arrow from '../../assets/arrowicon.png'


const ProgressBar = ({ steps, currentStep }) => {
    return (
        <div className="progress-bar">
            {steps.map((step, index) => (
                <React.Fragment key={index}>
                    <span className={index < currentStep ? "completed" : index === currentStep ? "current" : "upcoming"}>
                        {index < currentStep && <img src={complete} alt="completed" className="completed-icon" />}
                        {index === currentStep && <u>{step}</u>}
                        {index !== currentStep && step}
                    </span>
                    {index < steps.length - 1 && (
                        <img src={arrow} alt="arrow" className="arrow-icon" />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}

ProgressBar.propTypes = {
    steps: PropTypes.arrayOf(PropTypes.string).isRequired,  // Verifieert dat 'steps' een array van strings is
    currentStep: PropTypes.number.isRequired,  // Verifieert dat 'currentStep' een nummer is
};

export default ProgressBar;
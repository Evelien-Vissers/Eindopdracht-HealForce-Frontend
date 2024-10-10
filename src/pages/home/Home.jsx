import React from 'react';
import './Home.css'
import Button from '../../components/button/Button.jsx'

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-first-section">
                <h1 className="home-title">Heal Force</h1>
                <h3 className="home-subtitle">Because together, we are stronger</h3>
                <button className="btn black">Start Your Heal Force Journey Now</button>
                <p className="home-or">or</p>
                <button className="btn black large">Login</button>
            </div>

            <div className="home-second-section">
                <h3 className="second-title">About Heal Force</h3>
                <p className="second-paragraph">
                    Heal Force is a platform that connects people who have survived a chronic disease or who are going
                    through one—such as cancer, MS, Alzheimer's, ALS, Parkinson's, or diabetes. The platform will
                    provide its users a space where they can share their stories and treatments, find support by
                    connecting to
                    those who are experiencing the same, and give reviews on healthcare providers who have treated them.
                    Their
                    stories hold power, and by creating Heal Force, we hope to offer a stage on which the users feel
                    heard and empowered in the daunting world of medicine. It is <em>their</em> stories that must be
                    heard,
                    and by doing so, they may help and inspire others as well.
                </p>
            </div>
        </div>
    )
}

export default Home;
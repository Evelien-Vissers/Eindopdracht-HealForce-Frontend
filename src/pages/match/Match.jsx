import './Match.css'
import location from '../../assets/locationicon.png'
import warrior from '../../assets/warrioricon.png'
import method from '../../assets/healingicon.png'
import Button from "../../components/button/Button.jsx";
import {useEffect, useState} from "react";
import axios from 'axios'

const Match = ({ profile }) => {
    const [matches, setMatches] = useState([]); //Lijst met matches
    const [currentIndex, setCurrentIndex] = useState(0); //Houd bij welk profiel wordt getoond
    const [loading, setLoading] = useState(true); //Laadindicator

    useEffect(() => {
        // Fetch matches van de server obv connectionPreference
        axios.get('http://localhost:8080/matches')
            .then(response => {
                setMatches(response.data); //Stel de lijst met matches in
                setLoading(false); //Zet loading op 'false' als data is binnen gekomen
            })
            .catch(error => {
                console.error('Error fetching matches:', error);
                setLoading(false);
            });
    }, []);

    //Functie om naar het volgende profiel te gaan
    const handleNextProfile = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % matches.length);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (matches.length === 0) {
        return <div>No matches found</div>;
    }

    const currentMatch = matches[currentIndex]; //Haal het huidige profiel op dat getoond moet worden


    return (
        <div className="matching-page">
            <Button text="Go Back To My Profile" type="mint" size="large" link="/profile" />
            <div className="miniProfileMatch-container">
                <div className="profile-pic-container">
                    <img src={currentMatch.profilePicture || 'default-pic.jpg'} alt="Profile" className="profile-pic" />
                </div>
                <div className="match-details">
                    <h3>{currentMatch.healForceName}</h3>
                    <p><img src={location} alt="Location icon" /> {currentMatch.city}, {currentMatch.country}</p>
                    <p><img src={warrior} alt="HealthChallenge icon" /> {currentMatch.healthChallenge} Warrior</p>
                    <p><img src={method} alt="HealingChoice icon" /> Healing Choice: {currentMatch.healingChoice}</p>
            </div>
        </div>
        </div>
    );
};

export default Match;
import './Match.css'
import location from '../../assets/location_icon.png'
import warrior from '../../assets/warrior_icon.png'
import method from '../../assets/healing_icon.png'
import Button from "../../components/button/Button.jsx";
import MatchButton from "../../components/matchbutton/MatchButton.jsx";
import MatchListContainer from "../../components/matchlistcontainer/MatchListContainer.jsx";
import {useEffect, useState} from "react";
import thumbsUp from '../../assets/thumbs-up-solid.svg'
import thumbsDown from '../../assets/thumbs-down-solid.svg'



const Match = ( ) => {
    const [matches, setMatches] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [acceptedMatches, setAcceptedMatches] = useState([]);

    const Id = localStorage.getItem('id');

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const response = await fetch('http://localhost:8080/profiles/${Id}/potential-matches');
                const data = await response.json();
                setMatches(data);
            } catch (error) {
                console.error("Error fetching matches:", error);
            }
        };
        if (Id) {
            fetchMatches();
        } else {
            console.error("Profile is not available");
        }
    }, [Id]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % matches.length);
    };

    const handleYes = () => {
        setAcceptedMatches((prevMatches) => [...prevMatches, matches[currentIndex]]);
    };

    const currentMatch = {
        profilePicture: 'default-pic.jpg',
        healForceName: 'N/A',
        city: 'Unknown',
        country: 'Unknown',
        healthChallenge: 'Unknown',
        healingChoice: 'Unknown',
    };


        return (
            <div className="matching-page">
                <div className="button-container">
                <Button text="Go Back To My Profile" type="mint" size="large" link="/profile"/>
                </div>
            <div className="match-container">
                <div className="profile-pic-container">
                    <img src={currentMatch.profilePicture} alt="Profile" className="profile-pic"/>
                </div>
                <div className="match-details">
                    <h3 className="healforce-name">{currentMatch.healForceName}</h3>
                    <div className="detail-item">
                        <img src={location} alt="Location icon" className="icon"/><p>{currentMatch.city}, {currentMatch.country}</p></div>
                    <div className="detail-item">
                        <img src={warrior} alt="HealthChallenge icon" className="icon"/><p>{currentMatch.healthChallenge} Warrior</p></div>
                    <div className="detail-item">
                        <img src={method} alt="HealingChoice icon" className="icon"/><p>Healing Choice: {currentMatch.healingChoice}</p></div>
                </div>
                <div className="matchbutton-container">
                    <MatchButton text="Next" onClick={handleNext} icon={thumbsDown} type="next" />
                    <MatchButton text="Yes" onClick={handleYes} icon={thumbsUp} type="yes" />
                </div>
            </div>
                <MatchListContainer matches={acceptedMatches} />
            </div>

    );
}


export default Match;
import './Match.css'
import location from '../../assets/matchlocationicon.png'
import warrior from '../../assets/matchwarrioricon.png'
import method from '../../assets/matchhealingicon.png'
import Button from "../../components/button/Button.jsx";
import MatchButton from "../../components/matchbutton/MatchButton.jsx";
import MatchListContainer from "../../components/matchlistcontainer/MatchListContainer.jsx";
import {useState} from "react";


const Match = ( ) => {
    const [matches, setMatches] = useState([]);
    const currentMatch = {
        profilePicture: 'default-pic.jpg',
        healForceName: 'N/A',
        city: 'Unknown',
        country: 'Unknown',
        healthChallenge: 'Unknown',
        healingChoice: 'Unknown',
    };
    const handleNext = () => {
        console.log("Next Match");
    };

    const handleYes = () => {
        console.log("Say Yes to Match!");
        setMatches((prevMatches) => [...prevMatches, currentMatch]);
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
                    <MatchButton text="Next" onClick={handleNext} type="next" />
                    <MatchButton text="Yes" onClick={handleYes}/>
                </div>
            </div>
                <MatchListContainer matches={matches} />
            </div>

    );
}


export default Match;
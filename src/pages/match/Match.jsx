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
import {useAuth} from "../../authentication/AuthContext.jsx";

const Match = ( ) => {
    const [matches, setMatches] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [acceptedMatches, setAcceptedMatches] = useState([]);
    const {token, id} = useAuth();


    useEffect(() => {
        const fetchMatches = async () => {
            if (!token || !id) {
                console.error('No token found');
                return;
            }
            try {
                const response = await fetch('http://localhost:8080/profiles/${Id}/potential-matches', {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: token
                    }
                });
                const data = await response.json();
                setMatches(data);
            } catch (error) {
                console.error("Error fetching matches:", error);
            }
        };

        fetchMatches();
        }, [token, id]);

    const handleNext = async () => {
        if (matches[currentIndex]) {
            const profileId2 = matches[currentIndex].profileId;

            try {
                await fetch('http://localhost:8080/match/next-press', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: token
                    },
                    body: JSON.stringify({profileId2}),
                });
                setCurrentIndex((prevIndex) => (prevIndex + 1) % matches.length);
            } catch (error) {
                console.error("Error sending 'Next' action", error);
            }
        }
    };

    const handleYes = async () => {
        if (matches[currentIndex]) {
            const profileId2 = matches[currentIndex].profileId;

            try {
                await fetch('http://localhost:8080/match/yes-press', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json',
                        Authorization: token
                    },
                    body: JSON.stringify({profileId2}),
                });

                setAcceptedMatches((prevMatches) => [...prevMatches, matches[currentIndex]]);
                setCurrentIndex((prevIndex) => (prevIndex + 1) % matches.length);
            } catch (error) {
                console.error("Error sending 'Yes' action", error);
            }
        }
    };

    const currentMatch = matches.length > 0 ? matches[currentIndex] : {
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
                <Button text="Go Back To My Profile" type="black" size="large" link="/profile"/>
                </div>
            <div className="match-container">
                <div className="profile-pic-container">
                    <img src={currentMatch.profilePicUrl} alt="Profile" className="profile-pic-match"/>
                </div>
                <div className="match-details">
                    <h3 className="healforce-name">{currentMatch.healforceName}</h3>
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
import {useState} from 'react';
import './MatchListContainer.css';
import Button from "../button/Button.jsx";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../authentication/AuthContext.jsx";

const MatchListContainer = () => {
    const { token } = useAuth();
    const navigate = useNavigate();
    const [matches, setMatches] = useState([]);
    const [showMatches, setShowMatches] = useState(true)

    const fetchMatches = async () => {
        if (!token) {
            console.error("Token is not available");
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/match/my-matches', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token
                }
            });
            if (response.ok) {
                const data = await response.json();
                setMatches(data);
                setShowMatches(true);
        } else {
            console.error('Failed to fetch matches');
        }
    } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const handleViewProfile = (profileId) => {
        navigate(`/other-profile/${profileId}`);
    };

    return (
        <div className="match-list-container">
            <div className="button-wrapper">
            <Button text= "Show My HealForce Matches" type="mint" onClick={fetchMatches}>Show My HealForce Matches</Button>
            </div>
            {showMatches && (
                <table className="match-list-table">
                <thead>
                <tr>
                    <th>HealForce Name</th>
                    <th>View Profile</th>
                    <th>Email Address</th>
                </tr>
                </thead>
                <tbody>
                {matches.length > 0 ? (
                    matches.map((match, index) => (
                        <tr key={index}>
                            <td>{match.healforceName}</td>
                            <td>
                                <button
                                    className="view-profile-btn"
                                    onClick={() => handleViewProfile(match.profileId)}>
                                    View Profile
                                </button>
                            </td>
                            <td>{match.email}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="3">No matches found</td>
                    </tr>
                )}
                </tbody>
            </table>
                )}
        </div>
    );
};
export default MatchListContainer;
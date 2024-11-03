import {useState} from 'react';
import './MatchListContainer.css';
import Button from "../button/Button.jsx";
import {useNavigate} from "react-router-dom";

const MatchListContainer = () => {
    const navigate = useNavigate();
    const [matches, setMatches] = useState([
    {
        healForceName: 'CancerKing',
        profileId: 1,
        email: 'john.doe@example.com'
    }
    ]);

    const fetchMatches = async () => {
        try {
            const response = await fetch('http://localhost:8080/match/my-matches');
        if (response.ok) {
            const data = await response.json();
            setMatches(data);
        } else {
            console.error('Failed to fetch matches');
        }
    } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const handleViewProfile = (profileId) => {
        navigate(`/profile/${profileId}`);
    };

    return (
        <div className="match-list-container">
            <div className="button-wrapper">
            <Button text= "Show My HealForce Matches" type="black" onClick={fetchMatches}>Show My HealForce Matches</Button>
            </div>
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
                            <td>{match.healForceName}</td>
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
                        <td colSpan="4">No matches found</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};
export default MatchListContainer;
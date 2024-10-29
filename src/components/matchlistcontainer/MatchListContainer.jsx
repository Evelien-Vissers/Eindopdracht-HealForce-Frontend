import React from 'react';
import './MatchListContainer.css';

const MatchListContainer = ({ matches }) => {
    return (
        <div className="match-list-container">
            <h3>Your Matches</h3>
            <table className="match-list-table">
                <thead>
                <tr>
                    <th>HealForce Name</th>
                    <th>Profile Pic</th>
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
                                <img src={match.profilePicture || 'default-pic.jpg'} alt="Profile" className="profile-thumbnail" />
                            </td>
                            <td>
                                <button className="view-profile-btn" onClick={() => console.log(`Viewing profile of ${match.healForceName}`)}>
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
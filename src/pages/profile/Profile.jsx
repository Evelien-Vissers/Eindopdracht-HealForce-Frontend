import { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';
import Button from '../../components/button/Button.jsx';
import { Link } from "react-router-dom";
import {calculateAge} from "../../helpers/calculateAgeHelper.js";
import location from '../../assets/locationicon.png';
import warrior from '../../assets/warrioricon.png';
import healing from '../../assets/healingicon.png';


const Profile = () => {
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch profile data from database
        axios.get('http://localhost:8080/profiles/2')
            .then(response => {
                setProfileData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching profile data:', error);
                setError('Error fetching profile data. Please try again');
                setLoading(false);
            });
    }, []);

    const defaultProfile = {
        healForceName: 'N/A',
        city: 'Unknown',
        country: 'Unknown',
        healingChoice: 'Unknown',
        profilePicture: 'default-pic.jpg',
        gender: 'Unknown',
        diagnosis: 'Unknown',
        hospital: 'Unknown',
        connectionPreference: 'Unknown',
    };

    const age = profileData ? calculateAge(profileData) : 'N/A';
    const displayedProfileData = profileData || defaultProfile;

        return (
            <div className="profile-page">
                <div className="start-matching-container">
                    <Button text="Start Matching" size="large" type="mint" link="/match"/>
                </div>
                <div className="overlay">
                    <div className="miniProfile-container">
                        <div className="profile-pic">
                            <img src={displayedProfileData.profilePicture || 'default-pic.jpg'} alt="Profile"/>
                        </div>
                <div className="miniProfile-data">
                        <h3>{displayedProfileData.healForceName}</h3>
                        <p><img src={location} alt="Location icon" className="icon"/>
                            {displayedProfileData.city}, {displayedProfileData.country}</p>
                        <p><img src={warrior} alt="Warrior icon" className="icon"/>
                            {displayedProfileData.healthChallenge} Warrior</p>
                        <p><img src={healing} alt="Healing icon" className="icon"/>
                            Healing Choice: {displayedProfileData.healingChoice}</p>
                </div>
                    </div>

                <div className="detail-container">
                    <p><strong>Age:</strong> {age}</p>
                    <p><strong>Gender:</strong> {displayedProfileData.gender}</p>
                    <p><strong>Diagnosis Date:</strong> {displayedProfileData.diagnosisDate !== 'N/A' ? new Date(displayedProfileData.diagnosisDate).toLocaleDateString() : 'N/A'}</p>
                    <p><strong>Treated at:</strong> {displayedProfileData.hospital}</p>
                    <p><strong>Connection Preference:</strong> {displayedProfileData.connectionPreference}</p>
                </div>
                    <div className="adjust-profile-container">
                        <Button text="Adjust My Profile" size="large" type="black" link="/questionnaire"></Button>
                    </div>
                    {error && <div className="error-message">{error}</div>}
            </div>

            </div>
        );
    };


export default Profile;
